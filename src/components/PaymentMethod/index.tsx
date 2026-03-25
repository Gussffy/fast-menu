import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import pix from "../../../assets/icons/logo-pix-solid.png";

import { styles } from "./styes";

interface PaymentMethodProps {
  type: "pix" | "dinheiro";
  isSelected: boolean;
  onPress: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  type,
  isSelected,
  onPress,
}) => {
  const isPix = type === "pix";

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Badge de Check quando selecionado */}
      {isSelected && (
        <View style={styles.checkBadge}>
          <Ionicons name="checkmark" size={12} color="white" />
        </View>
      )}

      {/* Ícone Dinâmico */}
      {isPix ? (
        <Image source={pix} />
      ) : (
        <FontAwesome6
          name="wallet"
          size={24}
          color={isSelected ? "#FFFFFF" : "#A0A0A0"}
        />
      )}

      <Text style={[styles.text, isSelected && styles.textActive]}>
        {isPix ? "PIX" : "Dinheiro"}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentMethod;
