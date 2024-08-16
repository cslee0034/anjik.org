import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import PLATFORM from "@/const/platform";

const search = async (
  query: string,
  platformFilter: string,
  currentPage: number
) => {
  const params = new URLSearchParams({
    query,
    platform: platformFilter,
    page: String(currentPage),
  });

  const response = await fetch(`/api/products?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();

  return data;
};

export const useSearch = () => {
  const query = useRef<string>("");
  const [platformFilter, setPlatformFilter] = useState<string>(PLATFORM.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수 관리

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["search", query, platformFilter, currentPage],
    queryFn: async () => {
      const data = await search(query.current, platformFilter, currentPage);
      setTotalPages(data.totalPages); // API에서 반환된 totalPages 설정
      return data;
    },
  });

  const handleSearch = () => {
    if (query.current.trim()) {
      setCurrentPage(1);
      refetch();
    }
  };

  const changePage = (page: number) => {
    // 페이지 범위를 벗어나지 않도록 확인
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      refetch();
    }
  };

  return {
    query,
    handleSearch,
    isLoading,
    results: data?.products || [],
    currentPage,
    changePage,
    platformFilter,
    setPlatformFilter,
    totalPages,
  };
};
