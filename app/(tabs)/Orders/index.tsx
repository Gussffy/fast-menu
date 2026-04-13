import CustomHeader from "@/src/components/CutomHeader";
import OrderItem from "@/src/components/OrderItem";
import OrdersDesc from "@/src/components/OrdersDesc";
import styles from "@/src/styles/ordersScreen";
import React from "react";
import { ScrollView, View } from "react-native";

const orders = [
  { id: "1", title: "Cheeseburger", subtitle: "Wendy's Burger" },
  { id: "2", title: "Cheeseburger", subtitle: "Wendy's Burger" },
  { id: "3", title: "Cheeseburger", subtitle: "Wendy's Burger" },
];

export default function Orders() {
  return (
    <View style={styles.container}>
      <CustomHeader search />
      <OrdersDesc quantity={orders.length} total="250,00" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            title={order.title}
            subtitle={order.subtitle}
            status="received"
          />
        ))}
      </ScrollView>
    </View>
  );
}
