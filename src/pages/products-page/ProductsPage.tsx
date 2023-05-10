import { FC } from "react";

import Products from "../../components/products";
import PageTitle from "../../components/page-title";

const ProductsPage: FC = () => {
  return (
    <div>
      <PageTitle>Products</PageTitle>
      <Products />
    </div>
  );
};

export default ProductsPage;
