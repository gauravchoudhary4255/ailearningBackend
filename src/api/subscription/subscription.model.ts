import * as mongoose from 'mongoose';
import { Subscription } from './subscription.interface';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';


const subscriptionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

// userSchema.virtual('posts', {
//   ref: 'Post',
//   localField: '_id',
//   foreignField: 'author'
// });

subscriptionSchema.plugin(mongoosePaginate);
subscriptionSchema.plugin(aggregatePaginate);

// userSchema.pre('save', async function (next) {
//   const maxNumber = await UserModel.findOne().sort({ "numericId": -1 });
//   let maxNumberId = 1;

//   if (maxNumber && maxNumber.numericId) {
//     maxNumberId = maxNumber.numericId + 1;
//   }

//   const doc = this;
//   doc.numericId = maxNumberId;

//   next();
// });

subscriptionSchema.pre('save', async function (next) {
  const doc = this;

//   if (!doc.numericId) {
//     const count = await UserModel.countDocuments();

//     if (count === 0) {
//       doc.numericId = 1;
//     } else {
//       const maxNumber: any = await UserModel.findOneAndUpdate(
//         {},
//         { $inc: { numericId: 1 } },
//         { sort: { numericId: -1 }, new: true }
//       );

//       doc.numericId = maxNumber.numericId;
//     }
//   }

  next();
});

const SubcriptioModel = mongoose.model<Subscription & mongoose.Document>('subscription', subscriptionSchema);

export default SubcriptioModel;
