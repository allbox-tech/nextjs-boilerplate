/* eslint-disable no-unused-vars */
import type {
  QueryKey,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetch = <TData, TError>(
  key: QueryKey,
  queryFn: () => Promise<any>,
  options?: Omit<UseQueryOptions<TData, TError>, "queryFn" | "queryKey">
): UseQueryResult<TData, TError> => {
  return useQuery({
    queryKey: key,
    queryFn,
    ...options,
  });
};

export const useMutate = <
  TData,
  TError,
  TVariables = unknown,
  TContext = unknown
>(
  createFn: (data: any) => Promise<any>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationFn"
  >
): UseMutationResult<TData, TError, TVariables, TContext> & {
  res: (data: TData) => Promise<void>;
} => {
  const mutation = useMutation({
    mutationFn: createFn,
    ...options,
  });

  const res = async (data: any) => {
    await mutation.mutateAsync(data);
  };

  return {
    ...mutation,
    res,
  };
};
