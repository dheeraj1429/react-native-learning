import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
   container: {
      paddingBottom: SIZES.sizeLgXl,
      paddingTop: SIZES.sizeMd,
      width: "100%",
   },
   musicCardView: {
      width: "50%",
      paddingRight: SIZES.exSm,
   },
   musicCoverImage: {
      width: "100%",
      height: 200,
   },
   spaceView: {
      paddingBottom: SIZES.sizeMd,
   },
   artist: {
      color: COLORS.smoothGray,
      margin: SIZES.exSm,
   },
});
