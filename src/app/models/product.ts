import mongoose from '../database';
import autopopulate from 'mongoose-autopopulate';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  customer_name: {
    type: String,
    uppercase: true,
  },
  inputs_cost: {
    type: Number,
    required: true,
  },
  labor: {
    type: Number,
    required: true,
  },
  art: {
    type: Number,
    required: true,
  },
  others: {
    type: Number,
    required: true,
  },
  total_cost: {
    type: Number,
    required: true,
  },
  sale_value: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      autopopulate: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(autopopulate);
const Product = mongoose.model('Product', ProductSchema);

export default Product;
