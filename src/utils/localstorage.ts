import type { userTypes } from "@/types/user";

export class UserStorage {
  private user: string;

  constructor() {
    this.user = "fast-pizza-user";
  }

  get() {
    if (typeof window === "undefined") {
      // Retorna undefined se o código estiver sendo executado no servidor
      return undefined;
    }
    const result = localStorage.getItem(this.user);

    if (result) return JSON.parse(result);

    return undefined;
  }

  register(user: userTypes) {
    localStorage.setItem(this.user, JSON.stringify(user));
  }
}
