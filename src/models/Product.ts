import mongoose, { Schema } from "mongoose";

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

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
