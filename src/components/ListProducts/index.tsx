import { Product } from "@/src/data/products";
import { FlatList, Text } from "react-native";
import ProductCard from "../ProductCard";
import { styles } from "./styles";

type ListProductsProps = {
  products: Product[];
};

const ListProducts = ({ products }: ListProductsProps) => {
  if (!products.length) {
    return <Text style={styles.emptyText}>Nenhum item encontrado.</Text>;
  }

  const contentContainerStyle = { paddingBottom: 20, rowGap: 12 } as const;
  const columnWrapperStyle = {
    justifyContent: "space-between" as const,
    columnGap: 12,
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
      numColumns={2}
      columnWrapperStyle={columnWrapperStyle}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      persistentScrollbar={false}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default ListProducts;
