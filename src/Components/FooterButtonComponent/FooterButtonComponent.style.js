import { StyleSheet } from "react-native";
import { COLORS, Size } from "../../../Constant";

export const styles = StyleSheet.create({
   footer: {
      backgroundColor: "transparent",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   postionView: {
      position: "absolute",
      width: "100%",
      backgroundColor: COLORS.SKY_COLOR,
      height: "50%",
      left: 0,
      bottom: 0,
   },
   SpaceView: {
      padding: Size.extraLarge,
   },
   roundedButton: {
      padding: Size.extraLarge,
      borderRadius: Size.extraLarge,
      backgroundColor: COLORS.LIGHT_COLOR,
      elevation: 0,
   },
});
