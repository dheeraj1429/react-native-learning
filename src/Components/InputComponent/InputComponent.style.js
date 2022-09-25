import { StyleSheet } from "react-native";
import { COLORS, Size } from "../../../Constant";

export const styles = StyleSheet.create({
   inputView: {
      padding: Size.small,
      justifyContent: "center",
      alignItems: "center",
   },
   ViewMain: {
      width: "100%",
      padding: Size.middle,
   },
   textInput: {
      padding: Size.small,
      backgroundColor: COLORS.LIGHT_COLOR,
      borderRadius: 15,
      width: "100%",
   },
});
