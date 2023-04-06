import { FC } from "react";

import ProductsList from "./products-list";

const Products: FC = () => {
  return (
    <div>
      <ProductsList products={[]} />
    </div>
  );
};

export default Products;
