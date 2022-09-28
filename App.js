import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// screens
import HomeScreen from "./screens/HomeScreen";
import MusicScreen from "./screens/MusicScreen";

const stack = createNativeStackNavigator();

export default function App() {
   const [loaded] = useFonts({
      "Poppins-Black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
      "Poppins-ExtraBold": require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraLight": require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
      "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
      "Poppins-Thin": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
   });

   if (!loaded) return null;

   return (
      <NavigationContainer>
         <stack.Navigator>
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="music" component={MusicScreen} />
         </stack.Navigator>
      </NavigationContainer>
   );
}
