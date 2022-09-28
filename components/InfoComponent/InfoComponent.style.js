import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: SIZES.sizeSm,
      paddingBottom: SIZES.sizeSm,
   },
   heading: {
      fontSize: SIZES.sizeMd,
      fontFamily: "Poppins-Regular",
      color: COLORS.mainCl,
   },
   button: {
      paddingTop: SIZES.exSm,
      paddingBottom: SIZES.exSm,
      paddingLeft: SIZES.sizeLg,
      paddingRight: SIZES.sizeLg,
      backgroundColor: COLORS.lightRedPink,
      borderRadius: SIZES.small,
   },
   buttonText: {
      color: COLORS.mainCl,
   },
});
