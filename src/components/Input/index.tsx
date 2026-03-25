import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const Input = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}: InputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{placeholder}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder=""
      />
    </View>
  );
};

export default Input;
