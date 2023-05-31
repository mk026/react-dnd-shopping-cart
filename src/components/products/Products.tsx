import { FC } from "react";

import ProductsList from "./products-list";
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
      {data && <ProductsList products={data} />}
    </div>
  );
};

export default Products;
