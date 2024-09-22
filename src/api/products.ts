import type { ProductsProps } from "@/types/Cart";
import { api } from "./api";
import { AxiosError } from "axios";

export class ProductService {
  private router = "products";

  async get() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const result = await api.get<ProductsProps[]>(`/${this.router}`);
      return result.data
    }catch(error){
      console.log(error)
    }

    return [];
  }
}
