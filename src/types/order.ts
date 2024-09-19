import type { userTypes } from "./user";

export type OrderTypes = {
  product: {
    name: string;
    price: number;
    quantity: number;
  }[];
  id: string | number;
  priority: boolean;
  user: userTypes;
};
