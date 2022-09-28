import React from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./MusicAlbumCardComponent.style";
import { DEMO_DATA } from "../../constants";

const sizeOfCards = DEMO_DATA.length;

const MusicAlbumCardComponent = () => {
   return (
      <ScrollView style={styles.mainContainer} horizontal={true}>
         <FlatList
            numColumns={sizeOfCards}
            data={DEMO_DATA}
            renderItem={({ item }) => (
               <View>
                  <TouchableOpacity style={styles.cardView}>
                     <Image style={styles.cardImage} source={item.image} />
                  </TouchableOpacity>
                  <View style={styles.songeContnetView}>
                     <Text style={styles.textFirst}>{item.artist}</Text>
                     <Text style={styles.textSecond}>{item.songName}</Text>
                  </View>
               </View>
            )}
         />
      </ScrollView>
   );
};

export default MusicAlbumCardComponent;
