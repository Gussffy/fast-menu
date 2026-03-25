import { global } from "@/src/styles/global";
import { Text, View } from "react-native";
import styles from "./style";

const OrdersDesc = () => {
  return (
    <View style={[global.container, styles.descContainer]}>
      <Text>Pedidos:4</Text>
      <Text>Valor total: R$ 250,00</Text>
    </View>
  );
};

export default OrdersDesc;
