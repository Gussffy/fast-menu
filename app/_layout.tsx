import { CartProvider } from "@/src/context/CartContext";
import { OrdersProvider } from "@/src/context/OrdersContext";
import { UserProvider } from "@/src/context/UserContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
      <CartProvider>
        <OrdersProvider>
          <Slot />
        </OrdersProvider>
      </CartProvider>
    </UserProvider>
  );
}
