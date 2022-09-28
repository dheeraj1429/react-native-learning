import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
   mainContainer: {
      width: "100%",
      paddingTop: SIZES.sizeSm,
      paddingBottom: SIZES.sizeSm,
      flexDirection: "row",
   },
   cardView: {
      width: 250,
      height: 150,
      borderRadius: SIZES.sizeLg,
      backgroundColor: "red",
      overflow: "hidden",
      marginRight: SIZES.sizeLg,
   },
   cardImageView: {
      width: "100%",
      height: "100%",
   },
   cardImage: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
   },
   songeContnetView: {
      width: "100%",
      paddingTop: SIZES.sizeMd,
   },
   textFirst: {
      fontSize: SIZES.sizeSm,
      color: COLORS.smoothGray,
      fontFamily: "Poppins-Regular",
   },
   textSecond: {
      fontSize: SIZES.sizeLg,
      color: COLORS.mainCl,
      fontFamily: "Poppins-Regular",
      marginTop: -3,
   },
});
