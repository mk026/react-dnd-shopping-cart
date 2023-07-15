import { useQuery } from "@tanstack/react-query";
import { fakeGetProductRequest } from "../api/fakeApi";

export const useGetProductQuery = (id: number) =>
  useQuery({ queryKey: ["product"], queryFn: () => fakeGetProductRequest(id) });
