import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

import { IProduct } from "../../../../types/product";
import { Paths } from "../../../../routes";
import { useProduct } from "../../../../hooks/useProduct";

import classes from "./ProductGridItem.module.css";

interface ProductGridItemProps {
  product: IProduct;
}

const ProductGridItem: FC<ProductGridItemProps> = ({ product }) => {
  const { ref } = useProduct(product);

  return (
    <Card ref={ref} className={classes.product}>
      <CardContent>
        <Typography
          variant="h4"
          className={classes.title}
          component={Link}
          to={`${Paths.PRODUCTS}/${product.id}`}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {product.description}
        </Typography>
        <Typography variant="body2" className={classes.price}>
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductGridItem;
