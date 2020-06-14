import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_100Thin,
} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { ThemeProvider } from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';

import dark from './src/styles/theme/dark';
import light from './src/styles/theme/light';

import Routes from './src/routes';

export default function App() {
  const colorScheme = useColorScheme();

  const themeStatusBarStyle =
    colorScheme === 'light' ? 'dark-content' : 'light-content';

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
    Roboto_100Thin,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={colorScheme === 'light' ? light : dark}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={themeStatusBarStyle}
          backgroundColor="transparent"
          translucent
        />

        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
