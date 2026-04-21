import { createContext, ReactNode, useContext, useState } from "react";
import type { ImageSourcePropType } from "react-native";

type OrderStatus = "received" | "preparing" | "ready";

type OrderItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  image?: ImageSourcePropType;
  status: OrderStatus;
  orderDate: Date;
};

type CreateOrderPayload = {
  items: {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    quantity: number;
    image?: ImageSourcePropType;
  }[];
};

type OrdersContextData = {
  orders: OrderItem[];
  ordersCount: number;
  createOrder: (payload: CreateOrderPayload) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  getOrdersByStatus: (status: OrderStatus) => OrderItem[];
  clearOrders: () => void;
};

const OrdersContext = createContext<OrdersContextData | null>(null);

type OrdersProviderProps = {
  children: ReactNode;
};

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const createOrder = (payload: CreateOrderPayload) => {
    const newOrders: OrderItem[] = payload.items.map((item) => ({
      id: `${Date.now()}-${item.id}`, // ID único para cada item do pedido
      title: item.title,
      subtitle: item.subtitle,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      status: "received",
      orderDate: new Date(),
    }));

    setOrders((current) => [...current, ...newOrders]);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((current) =>
      current.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const getOrdersByStatus = (status: OrderStatus) => {
    return orders.filter((order) => order.status === status);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  const ordersCount = orders.length;

  const value: OrdersContextData = {
    orders,
    ordersCount,
    createOrder,
    updateOrderStatus,
    getOrdersByStatus,
    clearOrders,
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};
