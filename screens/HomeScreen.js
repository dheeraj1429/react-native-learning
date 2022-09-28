import React, { useLayoutEffect } from "react";
import { StyleSheet, View, ScrollView, Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import HeadingComponent from "../components/HeadingComponent/HeadingComponent";
import UserProfileComponent from "../components/UserProfileComponent/UserProfileComponent";
import SearchTagComponent from "../components/SearchTagComponent/SearchTagComponent";
import MusicAlbumCardComponent from "../components/MusicAlbumCardComponent/MusicAlbumCardComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import MusicCardComponent from "../components/MusicCardComponent/MusicCardComponent";

const HomeScreen = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
   }, []);

   return (
      <ScrollView style={styles.AndroidSafeAriaView}>
         <StatusBar translucent backgroundColor={COLORS.darkBg} barStyle="light-content" />
         <View style={styles.spaceView}>
            <View style={styles.navView}>
               <HeadingComponent heading={"Discover"} />
               <UserProfileComponent />
            </View>
            <SearchTagComponent />
            <MusicAlbumCardComponent />
            <InfoComponent heading={"Most Popular"} />
            <MusicCardComponent />
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   AndroidSafeAriaView: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: COLORS.darkBg,
   },
   spaceView: {
      paddingLeft: SIZES.sizeMd,
      paddingRight: SIZES.sizeMd,
      paddingTop: SIZES.sizeMd,
   },
   navView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
});

export default HomeScreen;
