import { FC } from "react";
import { useParams } from "react-router-dom";

const ProductPage: FC = () => {
  const { id } = useParams<"id">();
  return <div>ProductPage of product with id {id}</div>;
};

export default ProductPage;
