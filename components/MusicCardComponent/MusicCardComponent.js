import React from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import { styles } from "./MusicCardComponent.style";
import { MUSIC_DATA } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const MusicCardComponent = () => {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <FlatList
            numColumns={2}
            data={MUSIC_DATA}
            renderItem={({ item }) => (
               <TouchableOpacity
                  onPress={() => navigation.navigate("music")}
                  style={styles.musicCardView}
               >
                  <Image style={styles.musicCoverImage} source={item.coverImage} />
                  <View style={styles.spaceView}>
                     <Text style={styles.artist}>{item.artistName}</Text>
                  </View>
               </TouchableOpacity>
            )}
         />
      </View>
   );
};

export default MusicCardComponent;
