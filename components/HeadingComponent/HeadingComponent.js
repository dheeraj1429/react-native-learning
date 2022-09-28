import { View, Text } from "react-native";
import React from "react";
import { styles } from "./HeadingComponent.style";

const HeadingComponent = ({ heading }) => {
   return (
      <View>
         <Text style={styles.heading}>{heading}</Text>
      </View>
   );
};

export default HeadingComponent;
