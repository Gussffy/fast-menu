import { Href, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  title: string;
  path: Href;
}

const PrimaryButton = ({ title, path }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => router.push(path)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
