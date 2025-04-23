import axios from "axios";
import type { Product } from "../models/Product";
import http from "@/core/plugins/axios";

const API_URL = import.meta.env.VITE_BASE_URL_ENDPOINT + "product";

class ProductService {
  
  async getAll() {
    const response = await http.get<Product[]>(API_URL);
    return response.data;
  }

  async getById(id: number) {
    const response = await http.get<Product>(`${API_URL}/${id}`);
    return response.data;
  }

  async create(product: Product): Promise<Product> {
    try {
      const response = await http.post(API_URL, product);
      return response.data as Product;
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

  async update(id: number, product: Product) {
    const response = await http.put<Product>(`${API_URL}/${id}`, product);
    return response.data;
  }

  async delete(id: number) {
    const response = await http.delete(`${API_URL}/${id}`);
    return response.data;
  }
}

export default new ProductService();
