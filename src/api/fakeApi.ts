import { IProduct } from "../types/product";
import { getFakeProducts } from "../utils/getFakeProducts";

export const fakeGetProductsRequest = (): Promise<IProduct[]> => {
  const products = getFakeProducts();
  return new Promise((res) => setTimeout(() => res(products), 1000));
};
