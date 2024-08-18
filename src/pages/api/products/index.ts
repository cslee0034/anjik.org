import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import PLATFORM from "../../../const/platform";
import mongoConnect from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query, platform = PLATFORM.ALL, page = 1 } = req.query;
  const itemsPerPage = 5;
  const pageNumber = Number(page);

  try {
    const matchStage = platform !== PLATFORM.ALL ? { platform } : {};
    const searchStage = query
      ? {
          $search: {
            index: "product_search_index",
            compound: {
              should: [
                {
                  text: {
                    query: query,
                    path: "productName",
                    score: { constant: { value: 10 } },
                  },
                },
                {
                  text: {
                    query: query,
                    path: "category",
                    score: { constant: { value: 5 } },
                  },
                },
              ],
            },
          },
        }
      : null;

    // 총 데이터 수를 먼저 계산
    const totalItems = await Product.aggregate([
      ...(searchStage ? [searchStage] : []),
      { $match: matchStage },
      { $count: "total" },
    ]);

    // 총 데이터 개수
    const totalCount = totalItems[0]?.total || 0;
    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    // 페이지가 범위를 넘어가면 빈 데이터를 반환
    if (pageNumber > totalPages) {
      return res.status(200).json({
        products: [],
        totalPages,
        currentPage: pageNumber,
        totalCount,
        message: "No more products",
      });
    }

    // 페이지네이션을 위한 파이프라인 구성
    const pipeline = [];
    if (searchStage) pipeline.push(searchStage);
    if (Object.keys(matchStage).length > 0)
      pipeline.push({ $match: matchStage });
    pipeline.push(
      { $skip: (pageNumber - 1) * itemsPerPage },
      { $limit: itemsPerPage }
    );

    // 실제 데이터 조회
    const products = await Product.aggregate(pipeline);

    // 결과 반환
    return res.status(200).json({
      products,
      totalPages,
      currentPage: pageNumber,
      totalCount,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
