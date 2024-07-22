import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import { allCrops, crops } from "#/src/constants/crops";
import { CropCard } from "#/src/components/crop-card";
import { commonStyles } from "#/src/styles/common.styles";
import { getCropDisplayName, getCropImage } from "#/src/utils/crop";
import { texts } from "#/src/constants/text";
import { useCropImage } from "#/src/hooks/use-crop-image";

import { styles } from "./crop-selector.styles";

export const CropSelector = () => {
  const router = useRouter();
  const { setSelectedCrop, setCropImage, selectedCrop } = useCropImage();

  // if user changes selected crop, remove any image they might have selected
  useEffect(() => {
    setCropImage?.(null);
  }, [selectedCrop]);

  const selectCrop = (crop: crops) => {
    setSelectedCrop?.(crop);
    router.push("select-image");
  };

  return (
    <View style={commonStyles.screenContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{texts.CROP_SELECTOR_HEADER}</Text>
      </View>
      <ScrollView>
        <View>
          {allCrops.map((crop) => (
            <View key={crop} style={styles.cropCardContainer}>
              <CropCard
                cropName={getCropDisplayName(crop)}
                cropImageSrc={getCropImage(crop)}
                onClick={() => selectCrop(crop)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
