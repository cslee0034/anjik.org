import { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "../../../lib/mongodb";
import ProductDetail from "../../../models/ProductDetail";
import Product from "../../../models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();

  if (req.method === "POST") {
    try {
      const {
        picture,
        category,
        productName,
        platform,
        testShort,
        testLong,
        reference,
      } = req.body;

      const productDetail = new ProductDetail({ testLong, reference });
      await productDetail.save();

      const product = new Product({
        picture,
        category,
        productName,
        platform,
        testShort,
        productDetail: productDetail._id,
      });

      await product.save();

      res.status(201).json({ success: true, data: product });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
