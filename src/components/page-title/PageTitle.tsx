import { FC, PropsWithChildren } from "react";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default PageTitle;
