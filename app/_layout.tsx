import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import {
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { colors } from "#/src/design/colors";
import { CropImageProvider } from "#/src/providers";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <CropImageProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.SECONDARY,
          },
          headerTintColor: colors.PRIMARY,
          headerTitleStyle: {
            fontFamily: "Inter_100Thin",
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="index" options={{ title: "" }} />
        <Stack.Screen name="select-image" options={{ title: "" }} />
        <Stack.Screen name="show-results" options={{ title: "" }} />
        <Stack.Screen name="capture-image" options={{ title: "" }} />
      </Stack>
    </CropImageProvider>
  );
}
