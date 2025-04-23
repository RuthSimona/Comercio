export interface Item {
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  userId: number;
  items: Item[];
}