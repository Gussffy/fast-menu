import CustomHeader from "@/src/components/CutomHeader";
import PaymentMethod from "@/src/components/PaymentMethod";
import PrimaryButton from "@/src/components/PrimaryButton";
import TotalPrice from "@/src/components/TotalPrice";
import { useCart } from "@/src/context/CartContext";
import { formatCurrency } from "@/src/utils";
import { global } from "@/src/styles/global";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

export default function Checkout() {
  const { cartItemsCount, cartTotal, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<"pix" | "dinheiro">("pix");

  const serviceFee = useMemo(() => (cartItemsCount > 0 ? 2 : 0), [cartItemsCount]);
  const finalTotal = cartTotal + serviceFee;

  const handlePayNow = () => {
    clearCart();
    router.push("/(tabs)/Orders");
  };

  return (
    <View>
      <CustomHeader />
      <View style={global.container}>
        <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 10 }}>
          Detalhes do pedido:
        </Text>
        <Text>Pedido: R${formatCurrency(cartTotal)}</Text>
        <Text style={{ marginBottom: 20 }}>
          Taxa de servico: R${formatCurrency(serviceFee)}
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Tempo estimado de preparo: 20 Min
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 10 }}>
          Métodos de pagamento:
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 350 }}>
          <PaymentMethod
            type="dinheiro"
            isSelected={selectedPayment === "dinheiro"}
            onPress={() => setSelectedPayment("dinheiro")}
          />
          <PaymentMethod
            type="pix"
            isSelected={selectedPayment === "pix"}
            onPress={() => setSelectedPayment("pix")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TotalPrice total={finalTotal} />
          <PrimaryButton title="Pagar agora" onPress={handlePayNow} />
        </View>
      </View>
    </View>
  );
}
