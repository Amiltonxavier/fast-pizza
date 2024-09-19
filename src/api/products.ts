import type { ProductsProps } from "@/types/Cart";
import { api } from "./api";

export class ProductService {
  private router = "products";

  async get() {
    await new Promise((resolve) => setTimeout(resolve));
    const result = await api.get<ProductsProps[]>(`/${this.router}`);

    return result.data;
  }
}
