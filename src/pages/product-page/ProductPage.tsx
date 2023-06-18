import { FC } from "react";
import { useParams } from "react-router-dom";

import PageTitle from "../../components/page-title";

const ProductPage: FC = () => {
  const { id } = useParams<"id">();
  return <PageTitle>ProductPage of product with id {id}</PageTitle>;
};

export default ProductPage;
