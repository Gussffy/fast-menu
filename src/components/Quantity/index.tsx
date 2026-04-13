import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/src/styles/global";
import styles from "./style";

type QuantityProps = {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  alignment?: "left" | "right";
  minValue?: number;
};

const Quantity = ({
  value = 1,
  onIncrement,
  onDecrement,
  alignment = "right",
  minValue = 1,
}: QuantityProps) => {
  const canDecrease = value > minValue;

  return (
    <View
      style={[
        styles.quantityContainer,
        alignment === "left" && styles.quantityContainerLeft,
      ]}
    >
      <Text style={styles.quantityLabel}>Quantidade:</Text>
      <View style={styles.quantity}>
        <TouchableOpacity
          style={[styles.button, !canDecrease && styles.buttonDisabled]}
          onPress={onDecrement}
          disabled={!canDecrease}
          activeOpacity={0.8}
        >
          <MaterialIcons name="remove" size={24} color={colors.light} />
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{value}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onIncrement}
          activeOpacity={0.8}
        >
          <MaterialIcons name="add" size={24} color={colors.light} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quantity;
