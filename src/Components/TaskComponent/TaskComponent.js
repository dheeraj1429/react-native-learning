import { View, Text } from "react-native";
import React from "react";
import { styles } from "./TaskComponent.style";

const TaskComponent = ({ data }) => {
   return (
      <View style={styles.taskCards}>
         <Text style={styles.text}>{data}</Text>
      </View>
   );
};

export default TaskComponent;
