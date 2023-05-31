import { useQuery } from "@tanstack/react-query";
import { fakeGetProductsRequest } from "../api/fakeApi";

export const useGetProductsQuery = () =>
  useQuery({ queryKey: ["products"], queryFn: fakeGetProductsRequest });
