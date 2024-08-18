import mongoose, { Schema } from "mongoose";

const productDetailSchema = new Schema({
  testLong: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  etc: {
    type: String,
    required: false,
  },
});

const ProductDetail =
  mongoose.models.ProductDetail ||
  mongoose.model("ProductDetail", productDetailSchema);

export default ProductDetail;
