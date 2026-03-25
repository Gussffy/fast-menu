import { ScrollView, Text, View } from "react-native";

import style from "./style";

const Filter = () => {
  return (
    <ScrollView
      style={style.filterContainer}
      horizontal
      showsVerticalScrollIndicator={false}
    >
      <View style={style.filter}>
        <Text style={style.filterText}>Todos</Text>
      </View>
      <View style={style.filter}>
        <Text style={style.filterText}>Combos</Text>
      </View>
      <View style={style.filter}>
        <Text style={style.filterText}>Bebidas</Text>
      </View>
      <View style={style.filter}>
        <Text style={style.filterText}>Sobrimesas</Text>
      </View>
      <View style={style.filter}>
        <Text style={style.filterText}>Acompanhamentos</Text>
      </View>
    </ScrollView>
  );
};

export default Filter;
