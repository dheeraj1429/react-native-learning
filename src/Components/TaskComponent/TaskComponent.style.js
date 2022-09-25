import { StyleSheet } from "react-native";
import { COLORS, Size } from "../../../Constant";

export const styles = StyleSheet.create({
   taskCards: {
      backgroundColor: COLORS.LIGHT_COLOR,
      width: "100%",
      padding: Size.middle,
      borderRadius: Size.extraLarge,
      marginBottom: Size.middle,
   },
   text: {
      fontFamily: "JetBrainsMono-Light",
      color: COLORS.LIGHT_DARK_CL,
   },
});
