import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
   mainView: {
      width: "100%",
      paddingTop: SIZES.sizeSm,
      paddingBottom: SIZES.sizeSm,
      flexDirection: "row",
   },
   tagView: {
      paddingTop: SIZES.small,
      paddingBottom: SIZES.small,
      paddingRight: SIZES.sizeLg,
      paddingLeft: SIZES.sizeLg,
      backgroundColor: COLORS.smoothGray,
      marginRight: SIZES.small,
      borderRadius: SIZES.sizeLg,
   },
   text: {
      color: COLORS.lightGrayCl,
   },
   activeTab: {
      color: COLORS.mainCl,
   },
   activetagView: {
      backgroundColor: COLORS.lightGreen,
   },
});
