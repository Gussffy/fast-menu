import CustomHeader from "@/src/components/CutomHeader";
import OrderItem from "@/src/components/OrderItem";
import OrdersDesc from "@/src/components/OrdersDesc";
import { useOrders } from "@/src/context/OrdersContext";
import styles from "@/src/styles/ordersScreen";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Orders() {
  const { orders, ordersCount } = useOrders();

  // Calcular total dos pedidos
  const total = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <CustomHeader search />
      <OrdersDesc quantity={ordersCount} total={total.toFixed(2)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            title={order.title}
            subtitle={order.subtitle}
            status={order.status}
          />
        ))}
      </ScrollView>
    </View>
  );
}
