import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./assets/Hooks/Context";
import { CartProvider } from "./assets/Hooks/cartContext";
export default function App() {
  let [fontsLoaded] = useFonts({
    "popins-bold": require("./assets/font/Poppins-Bold.ttf"),
    "popins-regular": require("./assets/font/Poppins-Regular.ttf"),
    "popins-medium": require("./assets/font/Poppins-Medium.ttf"),
    "popins-semibold": require("./assets/font/Poppins-SemiBold.ttf"),
    "popins-light": require("./assets/font/Poppins-Light.ttf"),
    "popins-thin": require("./assets/font/Poppins-Thin.ttf"),
  });

  useMemo(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ContextProvider>
        <CartProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </CartProvider>
      </ContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
