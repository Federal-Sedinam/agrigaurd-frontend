import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { useCropImage } from "#/src/hooks/use-crop-image";
import { PrimaryButton } from "#/src/components/primary-button";
import { colors } from "#/src/design/colors";

import { styles } from "./results.styles";
import { CropDiseasePrediction, predictCropDisease } from "#/src/services";

export const Results = () => {
  const { selectedCrop, cropImage, reset } = useCropImage();
  const router = useRouter();

  const [predictionResponse, setPredictionResponse] =
    useState<CropDiseasePrediction>({ error: null, predictionInfo: null });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let active = true;

    const cleanUp = () => {
      active = false;
    };

    if (!cropImage || !selectedCrop) return cleanUp;

    setLoading(true);

    (async () => {
      try {
        const response = await predictCropDisease(selectedCrop, cropImage);
        if (active) {
          setPredictionResponse(response);
        }
      } catch (error) {
        if (active) {
          setPredictionResponse((curr) => ({ ...curr, error: error as Error }));
        }
      }
      if (active) {
        setLoading(false);
      }
    })();

    return cleanUp;
  }, [selectedCrop, cropImage]);

  const handleStartOver = () => {
    reset?.();
    router.dismissAll();
  };

  if (loading) {
    return (
      <View style={styles.screenContentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ActivityIndicator size="large" color={colors.PRIMARY} />
        </ScrollView>
        <View style={styles.startOverButtonContainer}>
          <PrimaryButton
            text="Start over"
            iconName="refresh"
            onPress={handleStartOver}
          />
        </View>
      </View>
    );
  }

  if (
    predictionResponse.error !== null ||
    predictionResponse.predictionInfo === null
  ) {
    return (
      <View style={styles.screenContentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ alignSelf: "center" }}>
            Sorry. An error occurred while fetching disease information...
          </Text>
        </ScrollView>
        <View style={styles.startOverButtonContainer}>
          <PrimaryButton
            text="Start over"
            iconName="refresh"
            onPress={handleStartOver}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screenContentContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          {predictionResponse.predictionInfo.predictedDisease}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "data:image/jpeg;base64," + cropImage }}
            contentFit="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.confidenceContainer}>
          <Text style={styles.confidenceText}>
            Confidence: {predictionResponse.predictionInfo.confidence}
          </Text>
        </View>
        {predictionResponse.predictionInfo.description && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>
              {predictionResponse.predictionInfo.description.header}
            </Text>
            {predictionResponse.predictionInfo.description.paragraphs.map(
              (paragraph, index) => (
                <Text key={index} style={styles.sectionParagraph}>
                  {paragraph}
                </Text>
              )
            )}
          </View>
        )}
        {predictionResponse.predictionInfo.treatment && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>
              {predictionResponse.predictionInfo.treatment.header}
            </Text>
            {predictionResponse.predictionInfo.treatment.paragraphs.map(
              (paragraph, index) => (
                <Text key={index} style={styles.sectionParagraph}>
                  {paragraph}
                </Text>
              )
            )}
          </View>
        )}
        {predictionResponse.predictionInfo.disclaimer && (
          <View style={styles.disclaimerSection}>
            <Text style={styles.disclaimerHeader}>
              {predictionResponse.predictionInfo.disclaimer.header}
            </Text>
            {predictionResponse.predictionInfo.disclaimer.paragraphs.map(
              (paragraph, index) => (
                <Text key={index} style={styles.disclaimerParagraph}>
                  {paragraph}
                </Text>
              )
            )}
          </View>
        )}
      </ScrollView>
      <View style={styles.startOverButtonContainer}>
        <PrimaryButton
          text="Start over"
          iconName="refresh"
          onPress={handleStartOver}
        />
      </View>
    </View>
  );
};
