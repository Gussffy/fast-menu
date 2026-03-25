import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

import { colors } from "../../styles/global";
import { styles } from "./styles";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={24} color={colors.secondary} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default SearchBar;
