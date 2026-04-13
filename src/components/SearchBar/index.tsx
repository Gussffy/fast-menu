import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

import { colors } from "../../styles/global";
import { styles } from "./styles";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={24} color={colors.secondary} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
