import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 80,
    backgroundColor: "#332C2B", // Fundo escuro dos cards
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    position: "relative",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  containerActive: {
    borderColor: "#E76F51", // Borda sutil quando selecionado
  },
  text: {
    color: "#A0A0A0",
    fontSize: 14,
    marginTop: 6,
  },
  textActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  checkBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "#E76F51", // Cor do círculo de check
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
