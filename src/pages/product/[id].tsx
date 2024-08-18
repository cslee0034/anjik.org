import { useRouter } from "next/router";
import { useProduct } from "../../hooks/useProduct";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Subscription from "../../components/subscription";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const { product, isLoading, isError } = useProduct(id as string);

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  if (isError || !product) {
    return <div>제품 정보를 찾을 수 없습니다.</div>;
  }

  // 개행 문자를 <br> 태그로 변환
  const formatTextWithLineBreaks = (text: string) => {
    return text?.replace(/\n/g, "<br />");
  };

  return (
    <div className="flex flex-col text-center items-center py-20">
      {/* Image */}
      <div className="mb-8">
        <Image
          src={product.picture}
          alt={product.productName}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Name */}
      <h1 className="text-2xl font-bold mb-2 py-4">{product.productName}</h1>

      {/* Category and Platform */}
      <p className="mb-1">
        <strong>품목:</strong> {product.category}
      </p>
      <p className="mb-10">
        <strong>판매 사이트:</strong> {product.platform}
      </p>

      {/* Divider */}
      <hr className="w-1/2 border-t-2 border-gray-300 mb-10" />

      {/* Test Results */}
      <h2 className="text-xl font-semibold mb-2">검사 결과</h2>
      <p className="mb-6">{product.testShort}</p>

      {/* Detailed Test Information */}
      <h2 className="text-xl font-semibold mb-2">검사 상세 내용</h2>
      {/* 개행 문자를 처리하여 HTML로 렌더링 */}
      <p
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: formatTextWithLineBreaks(
            product.productDetail.testLong || "검사 상세 내용이 없습니다."
          ),
        }}
      />

      {/* Reference */}
      <h2 className="text-xl font-semibold mb-2">참고 자료</h2>
      <p className="mb-10">
        {product.productDetail.reference || "참고 자료가 없습니다."}
      </p>

      {/* Divider */}
      <hr className="w-1/2 border-t-2 border-gray-300 mb-10" />

      {/* Subscription */}
      <div className="py-2">
        <Subscription />
      </div>
    </div>
  );
}
