import CustomHeader from "@/src/components/CutomHeader";
import OrderItem from "@/src/components/OrderItem";
import OrdersDesc from "@/src/components/OrdersDesc";
import { global } from "@/src/styles/global";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Orders() {
  return (
    <View>
      <CustomHeader />
      <OrdersDesc />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={[global.container, { height: 630 }]}
      >
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ScrollView>
    </View>
  );
}
