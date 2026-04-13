import { Href, router } from "expo-router";
import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style";

interface ButtonProps {
  title: string;
  path?: Href;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const PrimaryButton = ({
  title,
  path,
  buttonStyle,
  textStyle,
  onPress,
}: ButtonProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    if (path) {
      router.push(path);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
