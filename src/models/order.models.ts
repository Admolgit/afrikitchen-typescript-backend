import mongoose from "mongoose";

// dishes schema
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true
  },
  posterCode: {
    type: Number,
    require: true
  },
  city: {
    type: String,
    require: true
  }
}, 
{
  timestamps: true,
}
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

