import Logger from '../../logger';
import SubcriptioModel from './subscription.model';
import ProductModel from '../product/product.model';
import HttpException from '../../utils/httpException';
import mongoose from "mongoose";
class SubscriptionServices {
  public subscription = SubcriptioModel;
  public serviceModel = ProductModel;

  public userSubscription = async (userId: string, serviceId: string) => {
    try {
      // 1. Check if service exists
      const service = await this.serviceModel.findOne({
        _id: serviceId,
        type: 'service'
      });
      if (!service) {
        throw new HttpException(401, 'Service not found');
      }

      // 2. Check if user already subscribed
      const existingSubscription = await this.subscription.findOne({
        userId,
        serviceId
      });

      if (existingSubscription) {
        throw new HttpException(400, 'User already subscribed to this service');
      }

      const startDate = new Date();
      // Example: 30-day subscription
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + 3);

      const subscription = {
        userId,
        serviceId,
        startDate,
        endDate,
        isActive: true
      };

      await this.subscription.create(subscription);

      return subscription;
    } catch (error) {
      Logger.error(`Error in userSubscription: ${error}`);
      throw error;
    }
  };

  public getSubscription = async (userId: string) => {
    try {
      const getUserSubscriptions = await this.subscription.aggregate([
        { $match: { userId: userId } },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'usersData'
          }
        },
        { $unwind: '$usersData' },

        {
          $lookup: {
            from: 'products',
            localField: 'serviceId',
            foreignField: '_id',
            as: 'serviceData'
          }
        },
        { $unwind: '$serviceData' },
        {
          $project: {
            name: '$serviceData.name',
            description: '$serviceData.description',
            rating: '$serviceData.rating',
            startDate: '$startDate',
            endDate: '$endDate',
            serviceId : "$serviceId"
          }
        }
      ]);
      return getUserSubscriptions;
    } catch (error) {
      Logger.error(`error in gettin ssubscription list `);
      throw error;
    }
  };


  public getAService = async (userId: string , serviceId : string) => {
    try {
        console.log(userId , serviceId)
      const getSingleService = await this.subscription.aggregate([
        { $match: { userId: userId  , serviceId : new mongoose.Types.ObjectId(serviceId)} },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'usersData'
          }
        },
        { $unwind: '$usersData' },

        {
          $lookup: {
            from: 'products',
            localField: 'serviceId',
            foreignField: '_id',
            as: 'serviceData'
          }
        },
        { $unwind: '$serviceData' },
        {
          $project: {
            name: '$serviceData.name',
            description: '$serviceData.description',
            rating: '$serviceData.rating',
            startDate: '$startDate',
            endDate: '$endDate',
            serviceId : "$serviceId"
          }
        }
      ]);
      
      return getSingleService;
    } catch (error) {
      Logger.error(`error in gettin ssubscription list `);
      throw error;
    }
  };
}

export default SubscriptionServices;
