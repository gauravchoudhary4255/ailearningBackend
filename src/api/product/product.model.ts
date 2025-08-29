import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { Product } from './product.interfaces';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    numberOfProducts: { type: Number, default: 0 },
    type: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
    // toJSON: {
    //   virtuals: true, // getters setters are used to compute dynamic values  but instead is calculated at runtime based on other fields.
    //   getters: true
    // }
  }
);

productSchema.plugin(mongoosePaginate);
productSchema.plugin(aggregatePaginate);

const ProductModel = mongoose.model<Product & mongoose.Document>(
  'Product',
  productSchema
);
export default ProductModel;

// eg = > class User {
//   constructor(private firstName: string, private lastName: string, private dob: Date) {}

//   // Virtual getter - computed dynamically
//   get age(): number {
//     const today = new Date();
//     let age = today.getFullYear() - this.dob.getFullYear();
//     const m = today.getMonth() - this.dob.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < this.dob.getDate())) {
//       age--;
//     }
//     return age;
//   }

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const user = new User('John', 'Doe', new Date('2000-08-28'));
// console.log(user.fullName); // John Doe
// console.log(user.age);      // 25 (calculated dynamically from DOB)
// age is not there it compute dynamically whenever we need the date key
