import { userTypes } from "@/types/user";
import { api } from "./api";

export class UserService {
  private route = "user";

  async create(user: userTypes) {
    const response = await api.post(`/${this.route}`, user);

    return response.data;
  }

  async getUserById(userId: string | number) {
    const response = await api.get<userTypes>(`/${this.route}/${userId}`);

    return response.data;
  }
}
