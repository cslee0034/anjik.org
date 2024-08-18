import mongoose, { Schema } from "mongoose";
import ProductDetail from "./ProductDetail";

const productSchema = new Schema({
  picture: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  testShort: {
    type: String,
    required: true,
  },
  productDetail: {
    type: Schema.Types.ObjectId,
    ref: ProductDetail,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
