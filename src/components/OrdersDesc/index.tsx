import { global } from "@/src/styles/global";
import { Text, View } from "react-native";
import styles from "./style";

type OrdersDescProps = {
  quantity?: number;
  total?: string;
};

const OrdersDesc = ({ quantity = 0, total = "0,00" }: OrdersDescProps) => {
  return (
    <View style={[global.container, styles.descContainer]}>
      <Text style={styles.quantity}>{quantity} pedidos</Text>
      <Text style={styles.total}>Valor total: R${total}</Text>
    </View>
  );
};

export default OrdersDesc;
