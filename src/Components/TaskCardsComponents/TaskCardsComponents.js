import { View, FlatList } from "react-native";
import React from "react";
import { styles } from "./TaskCardsComponents.style";
import TaskComponent from "../TaskComponent/TaskComponent";
import { useSelector } from "react-redux";

const TaskCardsComponents = () => {
   const Task = useSelector((state) => state.index.Task);

   return (
      <>
         {!!Task.length ? (
            <View style={styles.ListScrollCard}>
               <FlatList
                  data={Task}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => <TaskComponent data={item} />}
               />
            </View>
         ) : null}
      </>
   );
};

export default TaskCardsComponents;
