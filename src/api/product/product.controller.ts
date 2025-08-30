import { NextFunction, Router, Request, Response } from 'express';
import Controller from '../../interfaces/controller.interface';
import { ROUTES, STATUS_CODE, SUCCESS_MESSAGES ,USER_CONSTANT} from '../../constant';
import { Product } from './product.interfaces';
import ProductServices from './product.services';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import ProductAndServicesValidation from './product.validation';
import { PRODUCT_TYPES } from '../../constant';
import authMiddleware from '../../middleware/auth.middleware';
import HttpException from '../../utils/httpException';
import Logger from '../../logger';
import roleMiddleware from '../../middleware/role.middleware';
import multer from 'multer';
import path from 'path';
import fs from 'fs';


const uploadPath = path.join(__dirname, "../../../uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // save files in uploads folder
  },
  filename: function (req, file, cb) {
    const datetimestamp = Date.now();
    const ext = file.mimetype.split("/").pop(); // file extension
    cb(null, `${file.fieldname}-${datetimestamp}-${Math.floor(Math.random() * 10000)}.${ext}`);
  },
});

const upload = multer({ storage });
// const upload = multer({ storage: multer.memoryStorage() })
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
       authMiddleware,
       roleMiddleware([[USER_CONSTANT.ROLES.admin]]),
       upload.single('image'),
      this.productAndServiceValidation.createProductAndCoursesValidation(),
      this.createPrdouctAndCourses
    );   

    this.router.get(
      `${this.path}/getAllProductsAndServices`,
      authMiddleware,
      this.getAllProductsAndServices
    );

    this.router.post(
        `${this.path}/getProductAndServiceById`,
        authMiddleware,
        this.productAndServiceValidation.getProductAndServiceBy(),
        this.getProductAndServiceById
    )

    this.router.post(
      `${this.path}/deleteProductAndServiceById`,
      authMiddleware,
      this.productAndServiceValidation.getProductAndServiceBy(),
      this.deleteProductAndServiceById
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
        inStock,
        rating,
        numberOfProducts,
        type
      } = req.body;
      const image = req.file;
       console.log("req.file",image);
      const productData: Product = {
        name,
        description,
        price,
        category,
        image : req.file ? req.file.path : '',
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
      const {_id} = req.body;
      const deleteData = await this.productServices.deleteProductById(_id);
      return successMiddleware(
        {
          message: 'Product and Service deleted successfully',
          data: deleteData
        },
        req,
        res,
        next
      );
    } catch (err){
      next(err);
    }
  };
}

export default ProductContoller;
