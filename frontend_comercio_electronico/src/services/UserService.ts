import axios from "axios";
import type { Users } from "@/models/Users";
import http from "@/core/plugins/axios";

const API_URL = import.meta.env.VITE_BASE_URL_ENDPOINT + "users";

class UserService {
  async getAll(): Promise<Users[]> {
    const response = await http.get(API_URL);
    const users: Users[] = response.data;
    return users;
  }

  async getById(id: number) {
    const response = await http.get<Users>(`${API_URL}/${id}`);
    return response.data;
  }

  async create(user: Users): Promise<Users> {
    try {
      const response = await http.post(API_URL, user);
      return response.data as Users;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data.message || "An unknown error occurred"
        );
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }

  async update(id: number, user: Users): Promise<Users> {
    const response = await http.put(`${API_URL}/${id}`, user);
    return response.data as Users;
  }

  async delete(id: number): Promise<void> {
    await http.delete(`${API_URL}/${id}`);
  }
}

export default new UserService();