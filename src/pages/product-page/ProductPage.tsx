import { FC } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import PageTitle from "../../components/page-title";
import { useGetProductQuery } from "../../hooks/useGetProductQuery";

const ProductPage: FC = () => {
  const { id } = useParams<"id">();
  const { data } = useGetProductQuery(Number(id));

  return (
    <>
      <PageTitle>ProductPage of product with id {id}</PageTitle>
      <Typography>{data?.title}</Typography>
      <Typography>{data?.description}</Typography>
      <Typography>{data?.price}</Typography>
    </>
  );
};

export default ProductPage;
