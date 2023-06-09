import mongoose from "mongoose";

// dishes schema
const dishesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, 
{
  timestamps: true,
}
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;

