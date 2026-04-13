import Quantity from "@/src/components/Quantity";
import { useCart } from "@/src/context/CartContext";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

const Product = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(2);

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
        <Image style={styles.image} source={hamburguer} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Cheeseburger Wendy&apos;s Burger</Text>

        <View style={styles.metaContainer}>
          <FontAwesome name="star" size={16} color="#f8a026" />
          <Text style={styles.score}>4.9</Text>
          <Text style={styles.time}>- 26 mins</Text>
        </View>

        <Text style={styles.descriptionContainer}>
          O Cheeseburger do Wendy&apos;s e um hamburguer classico de fast food que
          oferece uma explosao de sabor em cada mordida. Feito com um suculento
          hamburguer de carne bovina cozido a perfeicao, ele e coberto com queijo
          americano derretido, alface crocante, tomate maduro e picles crocantes.
        </Text>

        <View style={styles.quantityContainer}>
          <Quantity
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>R$60,24</Text>
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
