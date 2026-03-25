import { Tabs } from "expo-router";
import { Image } from "react-native";

import { colors } from "@/src/styles/global";
import cart from "../../assets/icons/cart.png";
import home from "../../assets/icons/home.png";
import orders from "../../assets/icons/orders.png";
import user from "../../assets/icons/user.png";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Image source={home} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <Image source={user} />,
        }}
      />

      <Tabs.Screen
        name="Orders"
        options={{
          tabBarIcon: () => <Image source={orders} />,
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: () => <Image source={cart} />,
        }}
      />
    </Tabs>
  );
}
