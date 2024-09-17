import { ProductsProps, Status } from "@/types/Cart";

export const PRODUCTS: ProductsProps[] = [
  {
    id: 1,
    name: "Margherita",
    ingredients: "tomato, mozzarella, basil",
    price: 12.00,
    status: Status.Available,
    quantity: 4,
    img: "https://example.com/images/margherita.jpg"
  },
  {
    id: 2,
    name: "Capricciosa",
    ingredients: "tomato, mozzarella, ham, mushrooms, artichoke",
    status: Status.Sold_out,
    price: 0,
    quantity: 0,
    img: "https://example.com/images/capricciosa.jpg"
  },
  {
    id: 3,
    name: "Romana",
    ingredients: "tomato, mozzarella, prosciutto",
    price: 15.00,
    status: Status.Available,
    quantity: 7,
    img: "https://example.com/images/romana.jpg"
  },
  {
    id: 4,
    name: "Prosciutto e Rucola",
    ingredients: "tomato, mozzarella, prosciutto, arugula",
    price: 16.00,
    status: Status.Available,
    quantity: 1,
    img: "https://example.com/images/prosciutto_e_rucola.jpg"
  },
  {
    id: 5,
    name: "Diavola",
    ingredients: "tomato, mozzarella, spicy salami, chili flakes",
    price: 16.00,
    status: Status.Available,
    quantity: 2,
    img: "https://example.com/images/diavola.jpg"
  },
  {
    id: 6,
    name: "Vegetale",
    ingredients: "tomato, mozzarella, bell peppers, onions, mushrooms",
    price: 13.00,
    status: Status.Available,
    quantity: 55,
    img: "https://example.com/images/vegetale.jpg"
  },
  {
    id: 7,
    name: "Napoli",
    ingredients: "tomato, mozzarella, fres tomato, basil",
    price: 16.00,
    status: Status.Available,
    quantity: 36,
    img: "https://example.com/images/napoli.jpg"
  },
  {
    id: 8,
    name: "Siciliana",
    ingredients: "tomato, mozzarella, anchovies, olives, capers",
    status: Status.Sold_out,
    price: 0,
    quantity: 0,
    img: "https://example.com/images/siciliana.jpg"
  },
  {
    id: 9,
    name: "Pepperoni",
    ingredients: "tomato, mozzarella, pepperoni",
    price: 14.00,
    status: Status.Available,
    quantity: 160,
    img: "https://example.com/images/pepperoni.jpg"
  },
  {
    id: 10,
    name: "Hawaiian",
    ingredients: "tomato, mozzarella, pineapple, ham",
    price: 15.00,
    status: Status.Available,
    quantity: 10,
    img: "https://example.com/images/hawaiian.jpg"
  },
  {
    id: 11,
    name: "Spinach and Mushroom",
    ingredients: "tomato, mozzarella, spinach, mushrooms",
    price: 15.00,
    status: Status.Available,
    quantity: 30,
    img: "https://example.com/images/spinach_and_mushroom.jpg"
  },
  {
    id: 12,
    name: "Mediterranean",
    ingredients: "tomato, mozzarella, sun-drie tomatoes, olives, artichoke",
    price: 16.00,
    status: Status.Available,
    quantity: 60,
    img: "https://example.com/images/mediterranean.jpg"
  },
  {
    id: 13,
    name: "Greek",
    ingredients: "tomato, mozzarella, spinach, feta, olives, pepperoncini",
    status: Status.Sold_out,
    price: 0,
    quantity: 0,
    img: "https://example.com/images/greek.jpg"
  },
  {
    id: 14,
    name: "Abruzzese",
    ingredients: "tomato, mozzarella, prosciutto, arugula",
    price: 16.00,
    status: Status.Available,
    quantity: 360,
    img: "https://example.com/images/abruzzese.jpg"
  },
  {
    id: 15,
    name: "Pesto Chicken",
    ingredients: "pesto, mozzarella, chicken, sun-drie tomatoes, spinach",
    price: 16.00,
    status: Status.Available,
    quantity: 360,
    img: "https://example.com/images/pesto_chicken.jpg"
  },
  {
    id: 16,
    name: "Eggplant Parmesan",
    ingredients: "marinara, mozzarella, eggplant, parmesan",
    price: 15.00,
    status: Status.Available,
    quantity: 5,
    img: "https://example.com/images/eggplant_parmesan.jpg"
  },
  {
    id: 17,
    name: "Roasted Veggie",
    ingredients: "marinara, mozzarella, zucchini, eggplant, peppers, onions",
    price: 15.00,
    status: Status.Available,
    quantity: 12,
    img: "https://example.com/images/roasted_veggie.jpg"
  },
  {
    id: 18,
    name: "Tofu and Mushroom",
    ingredients: "marinara, mozzarella, tofu, mushrooms, bell peppers",
    price: 15.00,
    status: Status.Available,
    quantity: 8,
    img: "https://example.com/images/tofu_and_mushroom.jpg"
  }
];

export const CONSTANT =  {
  PRODUCTS
}
