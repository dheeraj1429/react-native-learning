import { View, TextInput } from "react-native";
import React from "react";
import { styles } from "./InputComponent.style";
import { addTask } from "../../Redux/Action/AppAction";
import { useDispatch, useSelector } from "react-redux";

const InputComponent = () => {
   const dispatch = useDispatch();
   const TypeValue = useSelector((state) => state.index.TypeValue);

   const ChangeHandler = function (value) {
      dispatch(addTask(value));
   };

   return (
      <View style={styles.inputView}>
         <View style={styles.ViewMain}>
            <TextInput
               value={TypeValue}
               style={styles.textInput}
               onChangeText={(value) => ChangeHandler(value)}
               placeholder="Add Task"
            />
         </View>
      </View>
   );
};

export default InputComponent;
