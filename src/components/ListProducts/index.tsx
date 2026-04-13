import { Product } from "@/src/data/products";
import { Text, View } from "react-native";
import ProductCard from "../ProductCard";
import { styles } from "./styles";

type ListProductsProps = {
  products: Product[];
};

const ListProducts = ({ products }: ListProductsProps) => {
  if (!products.length) {
    return <Text style={styles.emptyText}>Nenhum item encontrado.</Text>;
  }

  return (
    <View style={styles.listContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
};

export default ListProducts;
