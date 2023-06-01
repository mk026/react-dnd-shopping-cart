import { FC } from "react";

import ProductsGrid from "./products-grid";
import SearchProductsForm from "./search-products-form";
import ProductsFilters from "./products-filters/ProductsFilters";
import { useGetProductsQuery } from "../../hooks/useGetProductsQuery";

const Products: FC = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div>
      <SearchProductsForm />
      <ProductsFilters />
      {isLoading && <p>Loading...</p>}
      {data && <ProductsGrid products={data} />}
    </div>
  );
};

export default Products;
