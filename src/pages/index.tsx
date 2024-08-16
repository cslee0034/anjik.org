import { Inter } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Tabs defaultValue="all" className="overflow-hidden">
        <div className="flex items-center py-1 px-1">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">알리</TabsTrigger>
            <TabsTrigger value="draft">테무</TabsTrigger>
            <TabsTrigger value="archived">쉬인</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>제품 목록</CardTitle>
              <CardDescription>
                해외직구 제품 안전성 검사결과를 바탕으로 한 정보를 제공합니다.
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
                    <TableHead>제품</TableHead>
                    <TableHead>플랫폼</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      검사 결과
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="ali">Ali</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="temu">Temu</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="shein">Shein</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="ali">Ali</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="ali">Ali</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="96"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="96"
                      />
                    </TableCell>
                    <TableCell className="font-medium hidden sm:table-cell">
                      의류 잡화
                    </TableCell>
                    <TableCell className="font-medium">샌들</TableCell>
                    <TableCell>
                      <Badge variant="temu">Temu</Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-xs text-muted-foreground py-4">
                <strong>1-10</strong> of <strong>32</strong>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
