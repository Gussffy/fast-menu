import CartItem from "@/src/components/CartItem";
import CustomHeader from "@/src/components/CutomHeader";
import PrimaryButton from "@/src/components/PrimaryButton";
import TotalPrice from "@/src/components/TotalPrice";
import { global } from "@/src/styles/global";
import { ScrollView, View } from "react-native";

export default function CartScreen() {
  return (
    <>
      <CustomHeader search />
      <View style={global.container}>
        <ScrollView
          style={{ height: 610 }}
          showsVerticalScrollIndicator={false}
        >
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TotalPrice />
          <PrimaryButton title="Fazer Pedido" path="/(tabs)/Cart/Checkout" />
        </View>
      </View>
    </>
  );
}
