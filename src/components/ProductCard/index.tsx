import { colors } from "@/src/styles/global";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ProductCard = () => {
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
          <Text>Cheeseburger teste</Text>
          <Text>Wendy&apos;s Burger</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <View style={styles.scoreContainer}>
          <FontAwesome name="star" size={15} color="gold" />
          <Text>4.5</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/(tabs)/Cart")}>
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
