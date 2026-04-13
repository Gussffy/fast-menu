import React from "react";
import { formatCurrency } from "@/src/utils";
import { Text, View } from "react-native";
import { styles } from "./style";

interface TotalPriceProps {
  total?: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total = 120.48 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço total:</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.value}>R${formatCurrency(total)}</Text>
      </View>
    </View>
  );
};

export default TotalPrice;
