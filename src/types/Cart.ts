export enum Status {
  Available = "Disponivel",
  Sold_out = "Esgotado",
}

export type CartProps = {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  quantity: number;
  status: Status;
};

export type ProductsProps = {
  id: string | number;
  name: string;
  ingredients: string;
  status: Status;
  price: number;
  quantity: number;
  img: string;
};
