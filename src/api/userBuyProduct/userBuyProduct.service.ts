import userBuyProductModel from './userBuyProduct.model';
import { UserBuyProduct } from './userProduct.interface';
import HttpException from '../../utils/httpException';
import Logger from '../../logger';
import ProductModel from '../product/product.model';
import { STATUS_CODE, ERROR_MESSAGES } from '../../constant';

import { Types } from 'mongoose';
import { name } from 'ejs';

class UserProductServices {
  public userBuyProduct = userBuyProductModel;
  public product = ProductModel;
  checkProductBuyExist = async (productId: string, quantity: number) => {
    try {
      const getProductDbData = await this.product
        .findOne({ _id: productId ,  type : { $ne: 'service' } })
        .lean();
      if (!getProductDbData) {
        throw new HttpException(STATUS_CODE.NOT_FOUND, 'Product not found');
      }
      if (getProductDbData.numberOfProducts < quantity) {
        throw new HttpException(
          STATUS_CODE.BAD_REQUEST,
          'Insufficient product quantity'
        );
      }
      return true;
    } catch (err) {
      Logger.error('Error in checkProductBuyExist service', err);
      throw err;
    }
  };

  UserBuyProduct = async (purchasedData: UserBuyProduct) => {
    try {
      const checkProduct = await this.checkProductBuyExist(
        purchasedData.productId,
        purchasedData.quantity
      );
      if (checkProduct) {
        const orderCreated = this.userBuyProduct.create(purchasedData);
        const updateProductQuantity = await this.product.findByIdAndUpdate(
          { _id: purchasedData.productId },
          { $inc: { numberOfProducts: -purchasedData.quantity } }
        );
        if (orderCreated && updateProductQuantity) {
          return orderCreated;
        } else {
          throw new HttpException(
            STATUS_CODE.BAD_REQUEST,
            ERROR_MESSAGES.SOMETHING_WENT_WRONG
          );
        }
      }
    } catch (err) {
      Logger.error('Error in UserBuyProduct service', err);
      throw err;
    }
  };

  userProductsData = async (userId: string) => {
    try {
      console.log('userId', userId);
      const getUserProduct = await this.userBuyProduct.aggregate([
        {
          $match: {
            userId: userId
          }
        },
        {
          $lookup: {
            from: 'products',
            localField: 'productId',
            foreignField: '_id',
            as: 'productDetails'
          }
        },
        { $unwind: '$productDetails' },
        {
          $project: {
            productId: 1,
            name: '$productDetails.name',
            description: '$productDetails.description',
            price: '$productDetails.price',
            category: '$productDetails.category',
            type: '$productDetails.type',
            rating: '$productDetails.rating',
            productStatus: '$productStatus'
          }
        }
      ]);

      return getUserProduct;
    } catch (err) {
      Logger.error('Error in userProductsData service', err);
      throw err;
    }
  };
}

export default UserProductServices;

