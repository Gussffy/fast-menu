import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { formatCurrency } from "@/src/utils";
import { Image, Text, TouchableOpacity, View, type ImageSourcePropType } from "react-native";
import { colors } from "@/src/styles/global";
import hamburguer from "../../../assets/images/hamburguer.png";
import Quantity from "../Quantity";
import styles from "./style";

type CartItemProps = {
  id: string;
  title?: string;
  subtitle?: string;
  price?: number;
  quantity?: number;
  image?: ImageSourcePropType;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove?: (id: string) => void;
};

const CartItem = ({
  id,
  title = "Cheeseburger",
  subtitle = "Wendy's Burger",
  price = 60.24,
  quantity = 1,
  image,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) => {
  const handleIncrement = () => onIncrement?.(id);
  const handleDecrement = () => onDecrement?.(id);
  const handleRemove = () => onRemove?.(id);
  const productImage = image ?? hamburguer;

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() =>
          router.push({
            pathname: "/(tabs)/Home/ProductPage",
            params: { id },
          })
        }
        activeOpacity={0.8}
      >
        <View>
          <Image style={styles.cartImage} source={productImage} resizeMode="contain" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{subtitle}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.price}>R${formatCurrency(price)}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemove}
            activeOpacity={0.8}
          >
            <Ionicons name="trash-outline" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <Quantity
          value={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          alignment="left"
        />
      </View>
    </View>
  );
};

export default CartItem;
