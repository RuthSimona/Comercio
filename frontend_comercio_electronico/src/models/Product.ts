export interface Product {
  id: number;
  name: string;
  state: boolean;
  stock: number;
  description: string;
  price: number;
  categoryId: number;
  //relacion con la categoria
  category: {
    id: number;
    name: string;
  };
}
