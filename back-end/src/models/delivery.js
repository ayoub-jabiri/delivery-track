import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    recipientName: {
      type: String,
      required: [true, "recipientName is required"],
      minlength: [3, "recipientName must be at least 3 characters"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
      minlength: [5, "address must be at least 5 characters"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "delivered"],
        message: "status must be pending or delivered",
      },
      default: "pending",
    },
    confirmedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Delivery = mongoose.model("Delivery", deliverySchema);

export default Delivery;
