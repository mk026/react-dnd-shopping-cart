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
      <PageTitle>{data?.title}</PageTitle>
      <Typography>{data?.description}</Typography>
      <Typography>{data?.price}</Typography>
    </>
  );
};

export default ProductPage;
