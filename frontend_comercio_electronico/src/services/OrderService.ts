// OrderService.js
import http from "@/core/plugins/axios";
import type { Order } from "../models/Order";

const BASE_URL = "/orders";

class OrderService {
    async createOrder(order: Order): Promise<string> {
    try {
      const response = await http.post(BASE_URL, order);
      const orderCode = response.data.orderCode;
    
    return orderCode;
    } catch (error) {
      throw error;
    }
  }

  async getOrders() {
    try {
      const response = await http.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getOrderById(orderId) {
    try {
      const response = await http.get(`${BASE_URL}/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(orderId, order) {
    try {
      const response = await http.put(`${BASE_URL}/${orderId}`, order);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(orderId) {
    try {
      const response = await http.delete(`${BASE_URL}/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}


export default new OrderService();
