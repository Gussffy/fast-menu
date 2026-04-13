import { colors } from "@/src/styles/global";
import { Ionicons } from "@expo/vector-icons"; // Importação do Expo
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import styles from "./style";

type PropsHeader = {
  search?: boolean;
};

const CustomHeader = ({ search }: PropsHeader) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
            activeOpacity={0.6}
          >
            <Ionicons name="arrow-back" size={24} color={colors.secondary} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          {search && (
            <Ionicons
              name="search-outline"
              size={24}
              color={colors.secondary}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;
