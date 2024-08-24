import Image from "next/image";
import { Loader2, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/hooks/useSearch";
import PLATFORM from "@/const/platform";
import router from "next/router";
import Head from "next/head";

export default function Home() {
  const {
    query,
    handleSearch,
    isLoading,
    products,
    currentPage,
    changePage,
    platformFilter,
    setPlatformFilter,
    totalPages,
  } = useSearch();

  const handlePlatformChange = (newPlatform: string) => {
    setPlatformFilter(newPlatform);
    changePage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Head>
        <title>안전한 직구 안직 - 홈</title>
        <meta
          name="google-site-verification"
          content="pNuR7WBuj9c4p5Yv2TB2MagUkmV5kJdQKfPcaETZM-s"
        />
      </Head>
      {/* 플랫폼 필터 변경 */}
      <Tabs
        value={platformFilter}
        onValueChange={handlePlatformChange}
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-2 items-start sm:flex-row py-1 px-1">
          <TabsList>
            <TabsTrigger value={PLATFORM.ALL}>All</TabsTrigger>
            <TabsTrigger value={PLATFORM.ALIEXPRSS}>알리</TabsTrigger>
            <TabsTrigger value={PLATFORM.TEMU}>테무</TabsTrigger>
            <TabsTrigger value={PLATFORM.SHEIN}>쉬인</TabsTrigger>
          </TabsList>

          {/* 검색어 입력 */}
          <div className="flex w-full items-center gap-1 sm:ml-auto sm:w-auto">
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="제품 또는 품목 검색"
                onChange={(e) => (query.current = e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mx-1 h-4 w-4 animate-spin" />
              ) : (
                "검색"
              )}
            </Button>
          </div>
        </div>

        {/* 검색 결과 */}
        <TabsContent value={platformFilter}>
          <Card>
            <CardHeader>
              <CardTitle>제품 목록</CardTitle>
              <CardDescription>
                해외직구 제품 안전성 검사결과에 기반한 정보를 제공합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">품목</TableHead>
                    <TableHead className="min-w-20">제품</TableHead>
                    <TableHead>플랫폼</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      검사 결과
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Skeleton className="h-[100px] w-[100px] rounded-xl" />
                          </TableCell>
                          <TableCell className="font-medium hidden sm:table-cell">
                            <Skeleton className="h-4 w-[50px]" />
                          </TableCell>
                          <TableCell className="font-medium">
                            <Skeleton className="h-4 w-[50px]" />
                          </TableCell>
                          <TableCell>
                            <Skeleton className="h-4 w-[50px]" />
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Skeleton className="h-4 w-[50px]" />
                          </TableCell>
                        </TableRow>
                      ))
                    : products.map((product: any) => (
                        <TableRow
                          key={product._id}
                          onClick={() => router.push(`/product/${product._id}`)}
                        >
                          <TableCell>
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="96"
                              src={product.picture}
                              width="96"
                            />
                          </TableCell>
                          <TableCell className="font-medium hidden sm:table-cell">
                            {product.category}
                          </TableCell>
                          <TableCell className="font-medium">
                            {product.productName}
                          </TableCell>
                          <TableCell>
                            <Badge variant={product.platform}>
                              {product.platform}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {product.testShort}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              {/* 페이지네이션 */}
              <Pagination>
                <PaginationContent>
                  {/* 이전 버튼 */}
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => changePage(currentPage - 1)}
                    />
                  </PaginationItem>

                  {Array.from(
                    { length: Math.min(3, totalPages) },
                    (_, index) => {
                      let pageNumber = currentPage;

                      if (currentPage === 1) {
                        pageNumber = index + 1;
                      } else if (currentPage === 2) {
                        pageNumber = index + 1;
                      } else {
                        pageNumber = currentPage - 1 + index;
                      }

                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            isActive={pageNumber === currentPage}
                            onClick={() => changePage(pageNumber)}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  {/* 다음 버튼 */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => changePage(currentPage + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
