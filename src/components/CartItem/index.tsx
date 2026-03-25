import { Image, Text, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

const CartItem = () => {
  return (
    <View>
      <View>
        <Image style={styles.cartImage} source={hamburguer} />
        <Text>Cheeseburger</Text>
        <Text>Wendy&apos;s Burger</Text>
      </View>
      <View>
        <Text>R$60.24</Text>
        <Text>Quantidade:</Text>
        <View>-</View>
        <View>2</View>
        <View>+</View>
      </View>
    </View>
  );
};

export default CartItem;
