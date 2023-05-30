import { FC } from "react";

import { IProduct } from "../../../../types/product";
import { Link } from "react-router-dom";
import { Paths } from "../../../../routes";
import { useProduct } from "../../../../hooks/useProduct";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [, ref] = useProduct(product);

  return (
    <div ref={ref}>
      <Link to={`${Paths.PRODUCTS}/${product.id}`}>{product.title}</Link>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
