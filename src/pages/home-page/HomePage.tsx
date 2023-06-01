import { FC } from "react";

import AppInfo from "../../components/app-info";
import ViewProductsButton from "../../components/view-products-button";

const HomePage: FC = () => {
  return (
    <>
      <AppInfo />
      <ViewProductsButton />
    </>
  );
};

export default HomePage;
