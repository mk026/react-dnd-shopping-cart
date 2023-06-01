import { FC } from "react";
import { Grid } from "@mui/material";

import { IProduct } from "../../../types/product";
import Product from "./product";

import classes from "./ProductsGrid.module.css";

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <Grid container className={classes.grid}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductsList;
