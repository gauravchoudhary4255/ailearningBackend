import * as mongoose from 'mongoose';
import { User } from '../user/user.interface';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { USER_CONSTANT } from '../../constant';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, index: true },
    title: String,
   userType :{
    type: String,
      enum: USER_CONSTANT.ROLES_ARRAY,
      index: true
   }
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

userSchema.plugin(mongoosePaginate);
userSchema.plugin(aggregatePaginate);

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

// userSchema.pre('save', async function (next) {
//   const doc = this;

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

//   next();
// });

const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default UserModel;
