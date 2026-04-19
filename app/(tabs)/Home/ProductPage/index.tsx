import CustomHeader from "@/src/components/CutomHeader";
import Product from "@/src/components/Product";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";
import styles from "./styles";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const productId = Array.isArray(id) ? id[0] : (id ?? "");

  return (
    <View style={styles.container}>
      <CustomHeader search />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Product id={productId} />
      </ScrollView>
    </View>
  );
};

export default ProductPage;
