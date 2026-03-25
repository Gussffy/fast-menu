import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

const OrderItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/Home/ProductPage")}
        >
          <Image style={styles.cartImage} source={hamburguer} />
          <Text style={styles.title}>Cheeseburger</Text>
          <Text style={styles.description}>Wendy&apos;s Burger</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>Status do pedido</Text>
      </View>
    </View>
  );
};

export default OrderItem;
