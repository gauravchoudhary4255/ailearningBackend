import Controller from '../../interfaces/controller.interface';
import { Router, Request, Response, NextFunction } from 'express';
import UserBuyProductService from './userBuyProduct.service';
import RequestWithUser from '../../interfaces/requestWithUser.interface';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import authMiddleware from '../../middleware/auth.middleware';
import UserBuyProductValidation from './userBuyProduct.validation';
import { UserBuyProduct } from './userProduct.interface';
import HttpException from '../../utils/httpException';
import { STATUS_CODE } from '../../constant';
class UserProductBuyController implements Controller {
  public path = '/user-buy-product';
  public router = Router();
  public userBuyProductService = new UserBuyProductService();
  public userBuyProductValidation = new UserBuyProductValidation();

  constructor() {
    this.initializeRoutes();
  }
  public initializeRoutes() {
    this.router.post(
      `${this.path}/buy-product`,
      authMiddleware,
      this.userBuyProductValidation.userBuyProductValidation(),
      this.UserBuyProduct
    );
    this.router.post(
        `${this.path}/users-products`,
         authMiddleware,
        this.usersProducts
    )
  }
  public UserBuyProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const request = req as RequestWithUser;
      const userId = request.user._id;
      const { productId, quantity } = req.body;
      const purchasedData: UserBuyProduct = {
        userId,
        productId,
        quantity
      };
      const productBuy = await this.userBuyProductService.UserBuyProduct(
        purchasedData
      );
      if (!productBuy) {
        throw new HttpException(
          STATUS_CODE.BAD_GATEWAY,
          'Product purchase failed'
        );
      }
      return successMiddleware(
        {
          message: 'Product purchased successfully',
          data: productBuy
        },
        req,
        res,
        next
      );
    } catch (error) {
      next(error);
    }
  };

  public usersProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
  const request = req as RequestWithUser;
      const userId = request.user._id;
        const usersProducts = await this.userBuyProductService.userProductsData(userId);
      return successMiddleware(
        {
          message: "User's purchased products fetched successfully",
          data: {value :usersProducts}
        },
        req,
        res,
        next
      );
    } catch (err) {
        console.log(err);
      next(err);
    }
  };
}

export default UserProductBuyController;
