import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./HeaderComponent.style";

const HeaderComponent = () => {
   return (
      <SafeAreaView style={styles.header}>
         <Text style={styles.heading}>All Taks</Text>
      </SafeAreaView>
   );
};

export default HeaderComponent;
