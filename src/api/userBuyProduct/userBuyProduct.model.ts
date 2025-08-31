import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { UserBuyProduct } from './userProduct.interface';

const userBuyProductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    quantity: { type: Number, required: true },
    productStatus: { type: String, default: 'pending' }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userBuyProductSchema.plugin(mongoosePaginate);
userBuyProductSchema.plugin(aggregatePaginate);

const userBuyProductModel = mongoose.model<UserBuyProduct & mongoose.Document>(
  'userbuyproduct',
  userBuyProductSchema
);
export default userBuyProductModel;
