import { IProduct } from "./product";

export interface ICartItem extends IProduct {
  amount: number;
}
