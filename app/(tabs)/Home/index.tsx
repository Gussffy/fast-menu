import { filterOptions, products } from "@/src/data/products";
import { useMemo, useState } from "react";
import SearchBar from "@/src/components/SearchBar";
import { ScrollView, View } from "react-native";

import Filters from "@/src/components/Filters";
import ListProducts from "@/src/components/ListProducts";
import { global } from "../../../src/styles/global";

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedFilter === "Todos" || product.category === selectedFilter;
      const normalizedQuery = search.trim().toLowerCase();
      const matchSearch =
        !normalizedQuery ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.subtitle.toLowerCase().includes(normalizedQuery);

      return matchCategory && matchSearch;
    });
  }, [search, selectedFilter]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={global.container}>
        <SearchBar value={search} onChangeText={setSearch} />
      </View>
      <Filters
        options={filterOptions}
        selectedOption={selectedFilter}
        onSelectOption={setSelectedFilter}
      />
      <View style={global.container}>
        <ListProducts products={filteredProducts} />
      </View>
    </ScrollView>
  );
}
