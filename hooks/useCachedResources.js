import React, { useState, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
                              'nunito-regular': require('../assets/fonts/Nunito-Regular.ttf'),
                              'nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
                            })
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
          setFontsLoaded(true);
          SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return fontsLoaded
  
}
