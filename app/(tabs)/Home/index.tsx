import SearchBar from "@/src/components/SearchBar";
import { ScrollView, View } from "react-native";

import Filters from "@/src/components/Filters";
import ListProducts from "@/src/components/ListProducts";
import { global } from "../../../src/styles/global";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={global.container}>
        <SearchBar />
      </View>
      <Filters />
      <View style={global.container}>
        <ListProducts />
      </View>
    </ScrollView>
  );
}
