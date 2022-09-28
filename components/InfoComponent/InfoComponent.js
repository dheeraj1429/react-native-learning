import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./InfoComponent.style";

const InfoComponent = ({ heading, display }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.heading}>{heading}</Text>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View all</Text>
         </TouchableOpacity>
      </View>
   );
};

export default InfoComponent;
