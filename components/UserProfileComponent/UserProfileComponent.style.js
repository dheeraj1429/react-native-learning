import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

export const styles = StyleSheet.create({
   userProfileView: {
      width: SIZES.sizeLarge,
      height: SIZES.sizeLarge,
      borderRadius: SIZES.sizeLarge,
      overflow: "hidden",
   },
   useImage: {
      width: "100%",
      height: "100%",
   },
});
