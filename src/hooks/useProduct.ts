import { useQuery } from "@tanstack/react-query";

const fetchProductById = async (id: string) => {
  const response = await fetch(`/api/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export const useProduct = (id: string | undefined) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id,
    retry: false,
  });

  return {
    product: data || null,
    isLoading,
    isError,
    refetch,
  };
};
