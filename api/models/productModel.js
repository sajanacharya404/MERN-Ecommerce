import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);
const productSchema = new mongoose.Schema({}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
export const Product = mongoose.model("Product", productSchema);
