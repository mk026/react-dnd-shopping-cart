import { FC } from "react";

import { IProduct } from "../../../../types/product";
import { Link } from "react-router-dom";
import { Paths } from "../../../../routes";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <Link to={`${Paths.PRODUCTS}/${product.id}`}>{product.title}</Link>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
