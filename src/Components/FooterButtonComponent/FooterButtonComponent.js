import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./FooterButtonComponent.style";
import { Icons } from "../../../Constant";
import { pressToAdd } from "../../Redux/Action/AppAction";
import { useDispatch } from "react-redux";

const FooterButtonComponent = () => {
   const dispatch = useDispatch();

   const PressHandler = function () {
      dispatch(pressToAdd());
   };

   return (
      <View style={styles.footer}>
         <View style={styles.postionView} />
         <View style={styles.SpaceView}>
            <TouchableOpacity style={styles.roundedButton} activeOpacity={0.2} onPress={PressHandler}>
               <Image source={Icons.Plus} />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default FooterButtonComponent;
