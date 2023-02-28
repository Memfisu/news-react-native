import * as Font from 'expo-font';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'mt-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
})

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        await fonts();
        await new Promise(resolve => setTimeout(resolve, 2000)); // test for splashscreen
      } catch (e) {
        console.log(e)
      }
      finally {
        setAppIsReady(true);
      }
    }

    fetchFonts();
  }, []);

  useLayoutEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null;
  }

  return <MainStack />;
}
