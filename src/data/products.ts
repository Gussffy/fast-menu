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
  description: string;
  price: number;
  image: string;
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
    description:
      "Hambúrguer suculento com queijo derretido, pão macio e ingredientes frescos.",
    image: "",
  },
  {
    id: "2",
    title: "Double Burger",
    subtitle: "Fast Grill",
    category: "Combos",
    rating: 4.7,
    price: 54.9,
    description:
      "Dois hambúrgueres grelhados com queijo, molho especial e pão tostado.",
    image: "",
  },
  {
    id: "3",
    title: "Coca-Cola",
    subtitle: "350ml",
    category: "Bebidas",
    rating: 4.6,
    price: 8.5,
    description: "Refrigerante clássico, gelado e refrescante.",
    image: "",
  },
  {
    id: "4",
    title: "Milkshake",
    subtitle: "Chocolate",
    category: "Bebidas",
    rating: 4.8,
    price: 19.9,
    description:
      "Milkshake cremoso de chocolate com sabor intenso e textura suave.",
    image: "",
  },
  {
    id: "5",
    title: "Sundae",
    subtitle: "Caramelo",
    category: "Sobremesas",
    rating: 4.5,
    price: 16,
    description:
      "Sorvete cremoso com cobertura de caramelo doce e irresistível.",
    image: "",
  },
  {
    id: "6",
    title: "Batata Frita",
    subtitle: "Porcao media",
    category: "Acompanhamentos",
    rating: 4.7,
    price: 18.9,
    description: "Batatas fritas crocantes por fora e macias por dentro.",
    image: "",
  },
  {
    id: "7",
    title: "Combo X-Bacon",
    subtitle: "Hambúrguer + Batata + Refrigerante",
    category: "Combos",
    rating: 4.8,
    price: 65.9,
    description:
      "Delicioso hambúrguer com bacon crocante acompanhado de batata frita e bebida.",
    image: "",
  },
  {
    id: "8",
    title: "Combo Chicken",
    subtitle: "Frango empanado",
    category: "Combos",
    rating: 4.6,
    price: 59.9,
    description: "Sanduíche de frango crocante com batata e bebida inclusa.",
    image: "",
  },
  {
    id: "9",
    title: "Suco Natural",
    subtitle: "Laranja 500ml",
    category: "Bebidas",
    rating: 4.7,
    price: 12.0,
    description: "Suco natural de laranja, fresco e sem conservantes.",
    image: "",
  },
  {
    id: "10",
    title: "Água Mineral",
    subtitle: "500ml",
    category: "Bebidas",
    rating: 4.5,
    price: 5.0,
    description: "Água mineral pura e refrescante.",
    image: "",
  },
  {
    id: "11",
    title: "Brownie",
    subtitle: "Chocolate",
    category: "Sobremesas",
    rating: 4.9,
    price: 14.9,
    description:
      "Brownie de chocolate macio por dentro e levemente crocante por fora.",
    image: "",
  },
  {
    id: "12",
    title: "Torta Gelada",
    subtitle: "Morango",
    category: "Sobremesas",
    rating: 4.7,
    price: 17.5,
    description: "Torta gelada de morango com creme leve e sabor marcante.",
    image: "",
  },
  {
    id: "13",
    title: "Onion Rings",
    subtitle: "Porção",
    category: "Acompanhamentos",
    rating: 4.6,
    price: 15.9,
    description: "Anéis de cebola empanados e crocantes.",
    image: "",
  },
  {
    id: "14",
    title: "Nuggets",
    subtitle: "6 unidades",
    category: "Acompanhamentos",
    rating: 4.8,
    price: 16.9,
    description:
      "Nuggets de frango crocantes por fora e suculentos por dentro.",
    image: "",
  },
];

export { filterOptions, products };
export type { Product, ProductCategory };
