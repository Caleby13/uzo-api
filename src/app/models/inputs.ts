import mongoose from '../database';

const InputSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  amount: {
    type: Number,
    required: true,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Input = mongoose.model('Input', InputSchema);

export default Input;
