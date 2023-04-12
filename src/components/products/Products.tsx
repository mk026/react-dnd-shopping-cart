import { FC } from "react";

import ProductsList from "./products-list";
import SearchProductsForm from "./search-products-form";
import ProductsFilters from "./products-filters/ProductsFilters";

const Products: FC = () => {
  return (
    <div>
      <SearchProductsForm />
      <ProductsFilters />
      <ProductsList products={[]} />
    </div>
  );
};

export default Products;
