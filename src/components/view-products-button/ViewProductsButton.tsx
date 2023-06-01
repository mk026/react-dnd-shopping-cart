import { FC } from "react";
import { Link } from "react-router-dom";

import { Paths } from "../../routes";

const ViewProductsButton: FC = () => {
  return <Link to={Paths.PRODUCTS}>View Products</Link>;
};

export default ViewProductsButton;
