import Quantity from "@/src/components/Quantity";
import { useCart } from "@/src/context/CartContext";
import { products } from "@/src/data/products";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

type Props = {
  id: string;
};

const Product = ({ id }: Props) => {
  const product = products.find((product) => product.id === id);
  const productImage = product?.image ?? hamburguer;

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((current) => current + 1);
  const handleDecrement = () =>
    setQuantity((current) => (current > 1 ? current - 1 : 1));

  const handleOrderNow = () => {
    addToCart({
      id: "1",
      title: "Cheeseburger",
      subtitle: "Wendy's Burger",
      price: 60.24,
      quantity,
    });
    router.push("/(tabs)/Cart");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={productImage} resizeMode="contain" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product?.title}</Text>

        <View style={styles.metaContainer}>
          <FontAwesome name="star" size={16} color="#f8a026" />
          <Text style={styles.score}>{product?.rating}</Text>
          <Text style={styles.time}>- 26 mins</Text>
        </View>

        <Text style={styles.descriptionContainer}>{product?.subtitle}</Text>
        <Text style={styles.descriptionContainer}>{product?.description}</Text>

        <View style={styles.quantityContainer}>
          <Quantity
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>R$ {product?.price}</Text>
          </View>

          <TouchableOpacity
            style={styles.orderButton}
            activeOpacity={0.8}
            onPress={handleOrderNow}
          >
            <Text style={styles.orderButtonText}>Pedir agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;
