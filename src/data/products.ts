type ProductCategory =
  | "Todos"
  | "Combos"
  | "Bebidas"
  | "Sobremesas"
  | "Acompanhamentos";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  category: ProductCategory;
  rating: number;
  price: number;
};

const filterOptions: ProductCategory[] = [
  "Todos",
  "Combos",
  "Bebidas",
  "Sobremesas",
  "Acompanhamentos",
];

const products: Product[] = [
  {
    id: "1",
    title: "Cheeseburger",
    subtitle: "Wendy's Burger",
    category: "Combos",
    rating: 4.9,
    price: 60.24,
  },
  {
    id: "2",
    title: "Double Burger",
    subtitle: "Fast Grill",
    category: "Combos",
    rating: 4.7,
    price: 54.9,
  },
  {
    id: "3",
    title: "Coca-Cola",
    subtitle: "350ml",
    category: "Bebidas",
    rating: 4.6,
    price: 8.5,
  },
  {
    id: "4",
    title: "Milkshake",
    subtitle: "Chocolate",
    category: "Bebidas",
    rating: 4.8,
    price: 19.9,
  },
  {
    id: "5",
    title: "Sundae",
    subtitle: "Caramelo",
    category: "Sobremesas",
    rating: 4.5,
    price: 16,
  },
  {
    id: "6",
    title: "Batata Frita",
    subtitle: "Porcao media",
    category: "Acompanhamentos",
    rating: 4.7,
    price: 18.9,
  },
];

export { filterOptions, products };
export type { Product, ProductCategory };

