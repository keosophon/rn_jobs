import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

// Keep the splash screen visible while we fetch resources
// and prevent the app from rendering while we do so.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
    'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
    'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // This tells the splash screen to hide immediately! If we call this after
    // `setAppIsReady`, then we may see a blank screen while the app is
    // loading its initial state and rendering its first pixels. So instead,
    // we hide the splash screen once we know the root view has already
    // performed layout.
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  
  if (!fontsLoaded) {
    return null;
  }
  return <Stack onLayout={onLayoutRootView}  />;
}
