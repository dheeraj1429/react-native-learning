import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./SearchTagComponent.style";

const ITEM_ARRAY = [
   { text: "pop Songs", key: 1 },
   { text: "trap", key: 2 },
   { text: "lofy", key: 3 },
   { text: "emosnal", key: 4 },
   { text: "dance", key: 5 },
];

const SearchTagComponent = () => {
   const [ActiveTag, setActiveTag] = useState("pop Songs");

   const ActiveClickHandler = function (data) {
      setActiveTag(data.text);
   };

   return (
      <View style={styles.mainView}>
         <ScrollView horizontal={true}>
            {ITEM_ARRAY.map((el) => (
               <TouchableOpacity
                  style={
                     el.text.toLowerCase() === ActiveTag.toLowerCase()
                        ? [styles.tagView, styles.activetagView]
                        : styles.tagView
                  }
                  key={el.key}
                  onPress={() => ActiveClickHandler(el)}
               >
                  <Text
                     style={
                        el.text.toLowerCase() === ActiveTag.toLowerCase()
                           ? [styles.text, styles.activeTab]
                           : styles.text
                     }
                  >
                     {el.text}
                  </Text>
               </TouchableOpacity>
            ))}
         </ScrollView>
      </View>
   );
};

export default SearchTagComponent;
