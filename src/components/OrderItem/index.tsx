import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

type OrderStatus = "received" | "preparing" | "ready";

type OrderItemProps = {
  title?: string;
  subtitle?: string;
  status?: OrderStatus;
};

const statusIndex: Record<OrderStatus, number> = {
  received: 0,
  preparing: 1,
  ready: 2,
};

const statuses = [
  "Seu pedido foi recebido",
  "O restaurante esta preparando sua comida",
  "Seu pedido esta pronto",
];

const OrderItem = ({
  title = "Cheeseburger",
  subtitle = "Wendy's Burger",
  status = "received",
}: OrderItemProps) => {
  const activeStep = statusIndex[status];

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => router.push("/(tabs)/Home/ProductPage")}
        activeOpacity={0.8}
      >
        <View>
          <Image style={styles.cartImage} source={hamburguer} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{subtitle}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.timelineContainer}>
        {statuses.map((label, index) => {
          const isCompleted = index <= activeStep;
          const isLast = index === statuses.length - 1;
          const connectorColor = index < activeStep ? "accent" : "muted";

          return (
            <View key={label} style={styles.statusRow}>
              <View style={styles.iconColumn}>
                <View
                  style={[
                    styles.iconCircle,
                    isCompleted ? styles.iconCircleActive : styles.iconCircleInactive,
                  ]}
                >
                  <MaterialIcons
                    name={index === 0 ? "check" : "adjust"}
                    size={12}
                    color={isCompleted ? "#fff" : "#c5c5c5"}
                  />
                </View>
                {!isLast && (
                  <View
                    style={[
                      styles.connector,
                      connectorColor === "accent"
                        ? styles.connectorAccent
                        : styles.connectorMuted,
                    ]}
                  />
                )}
              </View>
              <Text
                style={[
                  styles.statusLabel,
                  index === 0 ? styles.statusLabelActive : styles.statusLabelMuted,
                ]}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OrderItem;
