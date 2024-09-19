import { OrderTypes } from "@/types/order";
import { api } from "./api";

export class OrderService {
  private router = "orders";

  async post(order: OrderTypes) {
    const result = await api.post(`/${this.router}`, order);

    return result.data as OrderTypes;
  }

  async getById(Orderid: string | number) {
    const result = await api.get<OrderTypes>(`/${this.router}/${Orderid}`);

    return result.data;
  }
}
