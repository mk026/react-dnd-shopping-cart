import { IProduct } from "../types/product";
import { fakeProducts } from "../utils/getFakeProducts";

export const fakeGetProductsRequest = (): Promise<IProduct[]> => {
  return new Promise((res) => setTimeout(() => res(fakeProducts), 1000));
};

export const fakeGetProductRequest = (
  id: number
): Promise<IProduct | undefined> => {
  const product = fakeProducts.find((product) => product.id === id);
  return new Promise((res) => setTimeout(() => res(product), 1000));
};
