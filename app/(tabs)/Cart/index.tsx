import CartItem from "@/src/components/CartItem";
import CustomHeader from "@/src/components/CutomHeader";
import PrimaryButton from "@/src/components/PrimaryButton";
import TotalPrice from "@/src/components/TotalPrice";
import { useCart } from "@/src/context/CartContext";
import styles from "./styles";
import { ScrollView, Text, View } from "react-native";

export default function CartScreen() {
  const {
    cartItems,
    cartItemsCount,
    cartTotal,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCart();

  return (
    <View style={styles.container}>
      <CustomHeader search />
      <View style={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Itens no carrinho</Text>
          <Text style={styles.summaryValue}>{cartItemsCount}</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
              onRemove={removeItem}
            />
          ))}

          {!cartItems.length && (
            <Text style={styles.emptyMessage}>Seu carrinho esta vazio.</Text>
          )}
        </ScrollView>
        <View style={styles.footer}>
          <TotalPrice total={cartTotal} />
          <PrimaryButton
            title="Fazer Pedido"
            path="/(tabs)/Cart/Checkout"
            buttonStyle={styles.checkoutButton}
            textStyle={styles.checkoutButtonText}
          />
        </View>
      </View>
    </View>
  );
}
