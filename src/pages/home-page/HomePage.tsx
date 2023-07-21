import { FC } from "react";

import PageTitle from "../../components/page-title";
import AppInfo from "../../components/app-info";
import ViewProductsButton from "../../components/view-products-button";

const HomePage: FC = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <AppInfo />
      <ViewProductsButton />
    </>
  );
};

export default HomePage;
