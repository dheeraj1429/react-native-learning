import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "./Constant";

export const styles = StyleSheet.create({
   androidSafeAria: {
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: COLORS.BG_COLOR,
   },
});
