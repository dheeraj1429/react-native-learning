import React from "react";
import { View } from "react-native";
import { styles } from "./App.styles";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/Redux/Store/Store";

// components
import HeaderComponent from "./src/Components/HeaderComponent/HeaderComponent";
import FooterButtonComponent from "./src/Components/FooterButtonComponent/FooterButtonComponent";
import InputComponent from "./src/Components/InputComponent/InputComponent";
import TaskCardsComponents from "./src/Components/TaskCardsComponents/TaskCardsComponents";

// screens

// theme
const theme = {
   ...DefaultTheme,
   roundness: 2,
   version: 3,
   colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      secondary: "#f1c40f",
      tertiary: "#a1b2c3",
   },
};

export default function App() {
   const [loaded] = useFonts({
      "JetBrainsMono-Bold": require("./assets/fonts/JetBrainsMono-Bold.ttf"),
      "JetBrainsMono-BoldItalic": require("./assets/fonts/JetBrainsMono-BoldItalic.ttf"),
      "JetBrainsMono-ExtraBold": require("./assets/fonts/JetBrainsMono-ExtraBold.ttf"),
      "JetBrainsMono-ExtraBoldItalic": require("./assets/fonts/JetBrainsMono-ExtraBoldItalic.ttf"),
      "JetBrainsMono-ExtraLightItalic": require("./assets/fonts/JetBrainsMono-ExtraLightItalic.ttf"),
      "JetBrainsMono-Italic": require("./assets/fonts/JetBrainsMono-Italic.ttf"),
      "JetBrainsMono-Light": require("./assets/fonts/JetBrainsMono-Light.ttf"),
      "JetBrainsMono-LightItalic": require("./assets/fonts/JetBrainsMono-LightItalic.ttf"),
      "JetBrainsMono-Medium": require("./assets/fonts/JetBrainsMono-Medium.ttf"),
      "JetBrainsMono-Regular": require("./assets/fonts/JetBrainsMono-Regular.ttf"),
   });

   if (!loaded) return null;

   return (
      <Provider store={store}>
         <PaperProvider theme={theme}>
            <View style={styles.androidSafeAria}>
               <HeaderComponent />
               <InputComponent />
               <TaskCardsComponents />
               <FooterButtonComponent />
            </View>
         </PaperProvider>
      </Provider>
   );
}
