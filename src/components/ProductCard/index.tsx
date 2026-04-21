import { useCart } from "@/src/context/CartContext";
import { Product } from "@/src/data/products";
import { colors } from "@/src/styles/global";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View, type ImageSourcePropType } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import { styles } from "./styles";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const productImage = (product.image ?? hamburguer) as ImageSourcePropType;

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
        onPress={() =>
          router.push({
            pathname: "../(tabs)/Home/ProductPage",
            params: { id: product.id },
          })
        }
      >
        <View style={styles.imageContainer}>
          <Image
            source={productImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subtitle}>
            {product.subtitle.length > 15
              ? `${product.subtitle.substring(0, 15)}...`
              : product.subtitle}
          </Text>
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
