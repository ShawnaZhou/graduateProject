import { useColorScheme, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Camera } from "react-native-vision-camera";
import "react-native-gesture-handler";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./navigation/Stacks";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  useEffect(async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission == "not-determined" || cameraPermission == "denied") {
    
      const newCameraPermission = await Camera.requestCameraPermission();
      if (newCameraPermission == "authorized") {
        await saveToStore("cameraPermission", newCameraPermission);
      }
    } else if (cameraPermission == "restricted") {
    }
    console.log(cameraPermission);
  }, []);

  const isDarkMode = useColorScheme();
  const theme = {
    ...DefaultTheme,
    dark: isDarkMode === "dark" ? true : false,
    roundness: 2,
    mode: "adaptive",
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
    },
  };

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar barStyle={"dark-content"} />
          <Stacks />
        </PaperProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

