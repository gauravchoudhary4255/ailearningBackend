import { NextFunction, Router, Request, Response } from 'express';
import Controller from '../../interfaces/controller.interface';
import { ROUTES, STATUS_CODE, SUCCESS_MESSAGES } from '../../constant';
import { Product } from './product.interfaces';
import ProductServices from './product.services';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import ProductAndServicesValidation from './product.validation';
import { PRODUCT_TYPES } from '../../constant';
import HttpException from '../../utils/httpException';
import Logger from '../../logger';
class ProductContoller implements Controller {
  path = `/${ROUTES.PRODUCT}`;
  router = Router();
  public productServices = new ProductServices();
  public productAndServiceValidation = new ProductAndServicesValidation();
  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(
      `${this.path}/createPrdouctAndCourses`,
      this.productAndServiceValidation.createProductAndCoursesValidation(),
      this.createPrdouctAndCourses
    );

    this.router.get(
      `${this.path}/getAllProductsAndServices`,
      this.getAllProductsAndServices
    );

    this.router.post(
        `${this.path}/getProductAndServiceById`,
        this.productAndServiceValidation.getProductAndServiceBy(),
        this.getProductAndServiceById
    )
  }

  public createPrdouctAndCourses = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        name,
        description,
        price,
        category,
        image,
        inStock,
        rating,
        numberOfProducts,
        type
      } = req.body;

      const productData: Product = {
        name,
        description,
        price,
        category,
        image,
        inStock,
        rating,
        numberOfProducts,
        type
      };
      console.log(PRODUCT_TYPES.type.includes(productData.type));
      const checkProducDuplicacyByName =
        await this.productServices.checkProductNameExist(productData.name);
      if (checkProducDuplicacyByName) {
        throw new HttpException(
          STATUS_CODE.BAD_REQUEST,
          'Product name already exist'
        );
      }
      if (!PRODUCT_TYPES.type.includes(productData.type)) {
        res.status(STATUS_CODE.BAD_REQUEST);
        throw new HttpException(
          STATUS_CODE.BAD_REQUEST,
          'Invalid product type'
        );
      }

      const creatProductAndService =
        await this.productServices.addProductServices(productData);

      return successMiddleware(
        {
          message: SUCCESS_MESSAGES.COMMON.ADD_SUCCESS.replace(
            ':attribute',
            'Product and Service'
          ),
          data: creatProductAndService
        },
        req,
        res,
        next
      );
    } catch (err) {
      Logger.error('Error in createPrdouctAndCourses controller', err);
      next(err);
    }
  };

  public getAllProductsAndServices = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productsAndServices =
        await this.productServices.getProductsAndServices();
      return successMiddleware(
        {
          message: 'Products and Services fetched successfully',
          data: productsAndServices
        },
        req,
        res,
        next
      );
    } catch (err) {}
  };

  public getProductAndServiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const {_id} = req.body;
        console.log("id",_id);
        const getData = await this.productServices.getProductServiceById(_id);
        return successMiddleware(
            {
                message: 'Product and Service fetched successfully',
                data: getData
            },
            req,
            res,
            next
        );
    } catch (err) {
        Logger.error('Error in getProductAndServiceById controller', err);
        next(err);
    }
  };

  public updateProductAndServiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (err) {}
  };

  public deleteProductAndServiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    } catch (err) {}
  };
}

export default ProductContoller;
