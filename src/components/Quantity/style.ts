import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  quantityContainer: {
    alignItems: "flex-end",
  },
  quantityContainerLeft: {
    alignItems: "flex-start",
  },
  quantityLabel: {
    color: colors.secondary,
    fontSize: 28 / 1.8,
    fontWeight: "700",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 8,
  },
  quantityNumber: {
    fontSize: 32 / 1.8,
    color: colors.secondary,
    fontWeight: "600",
  },
  button: {
    backgroundColor: colors.primary,
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonDisabled: {
    opacity: 0.45,
  },
});

export default styles;
