import mongoose from '../database';
import autopopulate from 'mongoose-autopopulate';

const ItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  input: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Input',
    required: true,
    autopopulate: true,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  unit_cost: {
    type: Number,
    required: true,
  },
  total_cost: {
    type: Number,
    required: true,
  },
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

ItemSchema.plugin(autopopulate);
const Item = mongoose.model('Item', ItemSchema);

export default Item;
