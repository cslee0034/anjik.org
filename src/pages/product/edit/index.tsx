import { useState } from "react";
import { useRouter } from "next/router";
import NotFound from "../../404";

export default function EditProduct() {
  const env = process.env.NODE_ENV;

  const [formData, setFormData] = useState({
    picture: "",
    category: "",
    productName: "",
    platform: "",
    testShort: "",
    testLong: "",
    reference: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 제품 정보를 POST 요청으로 전송
    const response = await fetch("/api/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/product/edit");
    } else {
      console.error("Failed to create product");
    }
  };

  return (
    <>
      {env === "development" ? (
        <div className="max-w-lg mx-auto py-10">
          <h1 className="text-2xl font-bold mb-6">
            Edit Product (Development Mode)
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="picture" className="block mb-1">
                제품 이미지 URL
              </label>
              <input
                type="text"
                id="picture"
                name="picture"
                value={formData.picture}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block mb-1">
                카테고리
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="productName" className="block mb-1">
                제품명
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="platform" className="block mb-1">
                판매 플랫폼
              </label>
              <input
                type="text"
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="testShort" className="block mb-1">
                검사 결과 요약
              </label>
              <textarea
                id="testShort"
                name="testShort"
                value={formData.testShort}
                onChange={handleChange}
                className="w-full border rounded p-2"
                rows={2}
                required
              />
            </div>

            <div>
              <label htmlFor="testLong" className="block mb-1">
                검사 상세 내용
              </label>
              <textarea
                id="testLong"
                name="testLong"
                value={formData.testLong}
                onChange={handleChange}
                className="w-full border rounded p-2"
                rows={4}
                required
              />
            </div>

            <div>
              <label htmlFor="reference" className="block mb-1">
                참고 자료
              </label>
              <input
                type="text"
                id="reference"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              제품 등록
            </button>
          </form>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
