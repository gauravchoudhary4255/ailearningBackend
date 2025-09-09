import Controller from '../../interfaces/controller.interface';
import { Router, Request, Response, NextFunction } from 'express';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import RequestWithUser from '../../interfaces/requestWithUser.interface';
import authMiddleware from '../../middleware/auth.middleware';
import SubscriptionServices from './subscription.service';
import HttpException from '../../utils/httpException';
import _ from 'mongoose-paginate-v2';
import Logger from '../../logger';
class SubscriptController implements Controller {
  public path = '/user-subscription';
  public router = Router();
  public subscriptionServices = new SubscriptionServices()
  // Controller methods go here
  constructor() {
    this.initializeRoutes();
  }
  public initializeRoutes() {
    this.router.post(
      `${this.path}/buySubscription`,
       authMiddleware,
      this.buySubscription
    );

    this.router.post(
      `${this.path}/getSubscription`,
      authMiddleware,
      this.getUserSubscription
    );

    this.router.post(
      `${this.path}/getService`,
      authMiddleware,
      this.getSingleSerive
    )
  }

  public buySubscription = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const request = req as RequestWithUser;
      const user = request.user._id;
      const { serviceId } = req.body;
      if(!serviceId){
          throw new HttpException(400,"ServiceId is not available ")
      }
        const getSubscriptiondata =  await this.subscriptionServices.userSubscription(user ,  serviceId)
      return successMiddleware(
        {
          message: 'Subscription Purchased successfully',
          data: getSubscriptiondata
        },
        req,
        res,
        next
      );
    } catch (error) {
      next(error);
    }
  };

  public getUserSubscription = async(req : Request ,  res : Response ,  next : NextFunction)=>{
    try{
      const request = req as RequestWithUser;
      const user = request.user._id;
      const getSubscriptionOfUser= await this.subscriptionServices.getSubscription(user);
      return successMiddleware({
       message : "your subscription list",
       data : getSubscriptionOfUser 
      },
    req , res, next)
    }catch(error){
         Logger.error(`Error in gettig Subscription ${error}`)
    }
  };

  public getSingleSerive = async(req : Request ,  res : Response ,  next : NextFunction)=>{
    try{
      const request = req as RequestWithUser;
      const user = request.user._id;
      const {serviceId} = req.body;
      console.log(serviceId , "")
      const getSubscriptionOfUser= await this.subscriptionServices.getAService(user, serviceId);
      return successMiddleware({
       message : "your subscription",
       data : getSubscriptionOfUser 
      },
    req , res, next)
    }catch(error){
         Logger.error(`Error in gettig Subscription ${error}`)
    }
  };
  
}

export default SubscriptController;
