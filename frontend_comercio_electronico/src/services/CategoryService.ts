import axios from "axios";
import type { Category } from "@/models/Category";
import http from '@/core/plugins/axios'

const API_URL = import.meta.env.VITE_BASE_URL_ENDPOINT + "category";

class CategoryService {
  async getAll(): Promise<Category[]> {
    const response = await http.get(API_URL);
    const categories: Category[] = response.data;
    return categories;
  }

  async getById(id: number) {
    const response = await http.get<Category>(`${API_URL}/${id}`);
    return response.data;
  }

  async create(category: Category): Promise<Category> {
    try {
      const response = await http.post(API_URL, category);
      return response.data as Category;
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

  async update(id: number, category: Category): Promise<Category> {
    const response = await http.put(`${API_URL}/${id}`, category);
    return response.data as Category;
  }

  async delete(id: number): Promise<void> {
    await http.delete(`${API_URL}/${id}`);
  }
}

export default new CategoryService();
