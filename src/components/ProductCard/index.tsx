import { colors } from "@/src/styles/global";
import { useCart } from "@/src/context/CartContext";
import { Product } from "@/src/data/products";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      quantity: 1,
    });
    router.push("/(tabs)/Cart");
  };

  return (
    <View style={styles.cardItem}>
      <TouchableOpacity
        onPress={() => router.push("../(tabs)/Home/ProductPage")}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/hamburguer.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subtitle}>{product.subtitle}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <View style={styles.scoreContainer}>
          <FontAwesome name="star" size={15} color="gold" />
          <Text>{product.rating.toFixed(1)}</Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <Ionicons
            name="bag-handle-outline"
            size={25}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
