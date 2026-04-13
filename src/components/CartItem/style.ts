import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingHorizontal: 14,
    paddingVertical: 14,
    minHeight: 184,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  imageContainer: {
    width: "52%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 33 / 2,
    fontWeight: "600",
    color: colors.secondary,
    marginTop: 8,
  },
  description: {
    color: colors.secondary,
    fontSize: 30 / 2,
    marginTop: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingLeft: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartImage: {
    width: 130,
    height: 95,
    resizeMode: "contain",
  },
  price: {
    fontSize: 39 / 1.6,
    color: colors.dark,
    fontWeight: "700",
  },
  removeButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#ffd9d9",
    backgroundColor: "#fff5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
