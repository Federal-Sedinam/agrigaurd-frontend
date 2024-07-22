import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { View } from "react-native";

import { PrimaryButton } from "#/src/components/primary-button";
import { commonStyles } from "#/src/styles/common.styles";
import { useCropImage } from "#/src/hooks/use-crop-image";

import { styles } from "./image-capture.styles";

export const ImageCapture = () => {
  const { setCropImage } = useCropImage();

  const [permission, requestPermission] = useCameraPermissions();
  const cameraViewRef = useRef<CameraView>(null);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, []);

  const captureImage = async () => {
    const capturedImage = await cameraViewRef.current?.takePictureAsync({
      base64: true,
      quality: 1,
      exif: false,
      imageType: "jpg",
    });

    capturedImage && setCropImage?.(capturedImage.base64 as string);
    router.navigate("select-image");
  };

  if (!permission?.granted) {
    return (
      <View
        style={{ ...commonStyles.screenContainer, justifyContent: "center" }}>
        <PrimaryButton
          text="Grant camera permission"
          onPress={requestPermission}
        />
      </View>
    );
  }

  return (
    <View style={commonStyles.screenContainer}>
      <View style={styles.cameraContainer}>
        <CameraView style={styles.camera} facing="back" ref={cameraViewRef} />
      </View>
      <View style={styles.captureButtonContainer}>
        <PrimaryButton
          text="Capture"
          iconName="camera"
          onPress={captureImage}
        />
      </View>
    </View>
  );
};
