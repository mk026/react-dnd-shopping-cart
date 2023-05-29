import { FC } from "react";

import ProductsList from "./products-list";
import SearchProductsForm from "./search-products-form";
import ProductsFilters from "./products-filters/ProductsFilters";
import { getFakeProducts } from "../../utils/getFakeProducts";

const Products: FC = () => {
  const products = getFakeProducts();
  return (
    <div>
      <SearchProductsForm />
      <ProductsFilters />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
