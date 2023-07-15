import { IProduct } from "../types/product";

const fakeText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum assumenda nulla quaerat ut mollitia non! Veritatis possimus omnis inventore, nemo recusandae vel nostrum voluptate sed deserunt aliquid, nisi minima error!";

const generateFakeProducts = (count: number): IProduct[] => {
  const fakeProducts: IProduct[] = [];
  const fakeTextArray = fakeText.split(" ");
  for (let i = 1; i <= count; i++) {
    const fakeProduct: IProduct = {
      id: i,
      description: fakeText.repeat(Math.ceil(Math.random() * 10)),
      title: fakeTextArray[
        Math.floor(Math.random() * fakeTextArray.length)
      ].replace(
        /(^\w{1})(\w*)(\W*)/,
        (_, firstChar: string, characters: string) =>
          firstChar.toUpperCase().concat(characters)
      ),
      imageUrl: "fake_url",
      price: Math.floor(Math.random() * 100),
    };
    fakeProducts.push(fakeProduct);
  }
  return fakeProducts;
};

export const fakeProducts = generateFakeProducts(10);
