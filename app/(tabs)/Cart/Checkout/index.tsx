import CustomHeader from "@/src/components/CutomHeader";
import PaymentMethod from "@/src/components/PaymentMethod";
import PrimaryButton from "@/src/components/PrimaryButton";
import TotalPrice from "@/src/components/TotalPrice";
import { global } from "@/src/styles/global";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Checkout() {
  return (
    <View>
      <CustomHeader />
      <View style={global.container}>
        <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 10 }}>
          Detalhes do pedido:
        </Text>
        <Text>Pedido:R$ 120,00</Text>
        <Text style={{ marginBottom: 20 }}>Taxa de serviço: R$ 2,00:</Text>
        <Text style={{ marginBottom: 20 }}>
          Tempo estimado de preparo: 20 Min
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 10 }}>
          Métodos de pagamento:
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 350 }}>
          <PaymentMethod
            type="dinheiro"
            isSelected={false}
            onPress={() => router.push("/(tabs)/Orders")}
          />
          <PaymentMethod
            type="pix"
            isSelected
            onPress={() => router.push("/(tabs)/Orders")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TotalPrice />
          <PrimaryButton
            title="Pagar agora"
            path="/(tabs)/Cart/PixPage/index"
          />
        </View>
      </View>
    </View>
  );
}
