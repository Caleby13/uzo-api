import mongoose from '../database';
import autopopulate from 'mongoose-autopopulate';

const InputSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  amount: {
    type: String,
  },
  yield: {
    type: Number,
    required: true,
  },
  value_package: {
    type: Number,
    required: true,
  },
  unit_cost: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    uppercase: true,
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

InputSchema.plugin(autopopulate);
const Input = mongoose.model('Input', InputSchema);

export default Input;
