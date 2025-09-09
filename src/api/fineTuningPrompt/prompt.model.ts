import * as mongoose from 'mongoose';
import { IPrompt } from './prompt.interface';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';


const promptSchema = new mongoose.Schema(
  {
    promptData: { type: String, required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true }
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

promptSchema.plugin(mongoosePaginate);
promptSchema.plugin(aggregatePaginate);

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

promptSchema.pre('save', async function (next) {
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

const promptModel = mongoose.model<IPrompt & mongoose.Document>('prompt', promptSchema);

export default promptModel;
