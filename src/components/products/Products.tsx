import { FC } from "react";
import { CircularProgress } from "@mui/material";

import ProductsGrid from "./products-grid";
import SearchProductsForm from "./search-products-form";
import ProductsFilters from "./products-filters/ProductsFilters";
import { useGetProductsQuery } from "../../hooks/useGetProductsQuery";

const Products: FC = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <>
      <SearchProductsForm />
      <ProductsFilters />
      {isLoading && <CircularProgress />}
      {data && <ProductsGrid products={data} />}
    </>
  );
};

export default Products;
