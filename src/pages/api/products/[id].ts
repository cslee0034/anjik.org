import type { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "../../../lib/mongodb";
import Product from "../../../models/Product";
import { sendSlackMessage } from "../../../lib/slack-webhook";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();

  const { id } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const product = await Product.findById(id).populate("productDetail").exec();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    await sendSlackMessage(String(error));
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
