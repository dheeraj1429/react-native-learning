import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./UserProfileComponent.style";

const UserProfileComponent = () => {
   return (
      <View>
         <View style={styles.userProfileView}>
            <Image
               style={styles.useImage}
               source={{
                  uri: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
               }}
            />
         </View>
      </View>
   );
};

export default UserProfileComponent;
