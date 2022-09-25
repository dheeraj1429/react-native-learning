import { Platform, StatusBar, StyleSheet } from "react-native";
import { COLORS, Size } from "../../../Constant/index";

const styles = StyleSheet.create({
   header: {
      backgroundColor: COLORS.SKY_COLOR,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 10,
   },
   heading: {
      color: COLORS.LIGHT_COLOR,
      fontFamily: "JetBrainsMono-Regular",
      fontSize: Size.large,
   },
});

export default styles;
