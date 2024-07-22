import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

import { useCropImage } from "#/src/hooks/use-crop-image";
import { commonStyles } from "#/src/styles/common.styles";
import { getCropDisplayName } from "#/src/utils/crop";
import { PrimaryButton } from "#/src/components/primary-button";
import { crops } from "#/src/constants/crops";
import { CropTypePrediction, predictCropType } from "#/src/services/cropType";

import { styles } from "./image-selector.styles";
import { colors } from "#/src/design/colors";

export const ImageSelector = () => {
  const { selectedCrop, cropImage, setCropImage } = useCropImage();
  const [cropTypePrediction, setCropTypePrediction] =
    useState<CropTypePrediction>({
      cropType: null,
      error: null,
      confidence: null,
    });
  const [checkCropType, setCheckCropType] = useState<boolean>(false);
  const [checkingCropType, setCheckingCropType] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    let active = true;

    const cleanUp = () => {
      active = false;
    };

    if (!cropImage) return cleanUp;

    setCheckingCropType(true);

    (async () => {
      try {
        const prediction = await predictCropType(cropImage);
        if (active) {
          setCropTypePrediction(prediction);
        }
      } catch {}
      if (active) {
        setCheckingCropType(false);
      }
    })();

    return cleanUp;
  }, [selectedCrop, cropImage, checkCropType]);

  if (!selectedCrop) {
    return <></>;
  }

  const showCheckCropTypeButton = () => {
    return selectedCrop !== cropTypePrediction.cropType;
  };

  const disableDiseaseDetection = () => {
    return (
      cropTypePrediction.error !== null ||
      cropTypePrediction.cropType !== selectedCrop
    );
  };

  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (result.canceled || !result.assets.length) return;

    setCropImage?.(result.assets[0].base64 as string);
  };

  const handleCaptureImage = () => {
    router.push("capture-image");
  };

  const handleDetectDisease = () => {
    router.push("show-results");
  };

  return (
    <View style={commonStyles.screenContainer}>
      <View style={styles.headerTextContainer}>
        <Text
          style={
            styles.headerText
          }>{`Capture an image of a ${getCropDisplayName(
          selectedCrop
        ).toLowerCase()} leaf or upload from device`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={handleChooseImage}>
          <View style={styles.buttonContent}>
            <FontAwesome name="picture-o" size={24} />
            <Text style={styles.buttonText}>Choose image</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={handleCaptureImage}>
          <View style={styles.buttonContent}>
            <FontAwesome name="camera" size={24} />
            <Text style={styles.buttonText}>Capture image</Text>
          </View>
        </TouchableHighlight>
      </View>
      {cropImage && (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "data:image/jpeg;base64," + cropImage }}
              contentFit="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.cropTypeCheckInfoContainer}>
            <View style={styles.cropTypeCheckInfoTextContainer}>
              {cropTypePrediction.cropType || cropTypePrediction.confidence ? (
                <Text style={styles.cropTypeCheckInfoText}>
                  {`Image resembles a ${getCropDisplayName(
                    cropTypePrediction.cropType as crops
                  )}. Confidence: ${cropTypePrediction.confidence}`}
                </Text>
              ) : (
                <Text style={styles.cropTypeCheckInfoText}>
                  Checking image...
                </Text>
              )}
              {checkingCropType ? (
                <ActivityIndicator size="small" color={colors.PRIMARY} />
              ) : (
                <FontAwesome
                  name={
                    cropTypePrediction.cropType === selectedCrop
                      ? "check-square-o"
                      : "exclamation"
                  }
                  color={
                    cropTypePrediction.cropType === selectedCrop
                      ? colors.PRIMARY
                      : colors.WARNING
                  }
                  size={20}
                />
              )}
            </View>
            {showCheckCropTypeButton() && (
              <TouchableHighlight
                onPress={() => setCheckCropType(!checkCropType)}
                style={{ flex: 1, alignSelf: "flex-end", marginTop: 10 }}
                disabled={checkingCropType}>
                <View style={{ backgroundColor: colors.SECONDARY, padding: 5 }}>
                  <Text
                    style={{
                      fontFamily: "Inter_400Regular",
                      fontSize: 12,
                      color: colors.PRIMARY,
                    }}>
                    Check image again
                  </Text>
                </View>
              </TouchableHighlight>
            )}
          </View>
          <View style={styles.detectDiseaseButtonContainer}>
            <PrimaryButton
              text="Detect disease"
              onPress={handleDetectDisease}
              disabled={disableDiseaseDetection()}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};
