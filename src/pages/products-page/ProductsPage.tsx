import { FC } from "react";

import Products from "../../components/products";
import PageTitle from "../../components/page-title";

const ProductsPage: FC = () => {
  return (
    <>
      <PageTitle>Products</PageTitle>
      <Products />
    </>
  );
};

export default ProductsPage;
