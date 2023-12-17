import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const controler = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controler.signal,
          ...requestConfig,
        })
        .then((res) => {
          setIsLoading(false);
          setData(res.data.results);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });

      return () => controler.abort();
    },
    deps ? [...deps] : []
  );

  return { error, data, isLoading };
};

export default useData;
