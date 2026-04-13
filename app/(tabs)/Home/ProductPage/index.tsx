import Product from "@/src/components/Product";
import CustomHeader from "@/src/components/CutomHeader";
import { ScrollView, View } from "react-native";
import styles from "./styles";

const ProductPage = () => {
  return (
    <View style={styles.container}>
      <CustomHeader search />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Product />
      </ScrollView>
    </View>
  );
};

export default ProductPage;
