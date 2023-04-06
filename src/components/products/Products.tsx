import { FC } from "react";

import ProductsList from "./products-list";
import SearchProductsForm from "./search-products-form";

const Products: FC = () => {
  return (
    <div>
      <SearchProductsForm />
      <ProductsList products={[]} />
    </div>
  );
};

export default Products;
