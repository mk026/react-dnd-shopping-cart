import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

import { IProduct } from "../../../../types/product";
import { Paths } from "../../../../routes";
import { useProduct } from "../../../../hooks/useProduct";

import classes from "./Product.module.css";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [, ref] = useProduct(product);

  return (
    <Card ref={ref} className={classes.product}>
      <CardContent>
        <Typography
          variant="h4"
          component={Link}
          to={`${Paths.PRODUCTS}/${product.id}`}
        >
          {product.title}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body2">{product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
