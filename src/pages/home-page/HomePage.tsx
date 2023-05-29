import { FC } from "react";
import { Link } from "react-router-dom";

import { Paths } from "../../routes";

const HomePage: FC = () => {
  return (
    <>
      <div>Welcome to React DnD shopping cart demo app</div>
      <Link to={Paths.PRODUCTS}>View Products</Link>
    </>
  );
};

export default HomePage;
