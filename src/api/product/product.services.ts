import ProductModel from "./product.model";
import { Product } from "./product.interfaces";
import HttpException from "../../utils/httpException";
import Logger from "../../logger";
import { STATUS_CODE } from "../../constant";
class ProductServices {
    public product = ProductModel;

addProductServices = async(product : Product)=>{
        try{ 
            return this.product.create(product);
        }catch(err){
            Logger.error("Error in addProductServices service",err);
             throw new HttpException(500,"Internal Server Error");
        }
    }

checkProductNameExist = async(name : string)=>{
     try{
        const productData = await this.product.findOne({name}).lean();
        return productData;
     }catch(err){
        Logger.error("Error in checkProductNameExist service",err);
         throw new HttpException(STATUS_CODE.INTERNAL_SERVER_ERROR,"Internal Server Error");
     }
  }
getProductsAndServices = async()=>{
        try{
            return this.product.find().lean();
        }catch(err){
            Logger.error("Error in getAllProductsAndServices service",err);
             throw err;
        }
    }

getProductServiceById = async(_id : string)=>{
        try{
            const data = await  this.product.findById(_id).lean();
            if(!data){
                throw new HttpException(STATUS_CODE.NOT_FOUND,"Product or Service not found");
            }
            return data
            
        }catch(error){
           Logger.error("Error in getProductServiceById service",error);
            throw error;
        }
    }



    deleteProductById = async(_id : string)=>{
        try{
            const data = await this.product.findByIdAndDelete(_id).lean();
            if(!data){
                throw new HttpException(STATUS_CODE.NOT_FOUND,"Product or Service not found");
            }
            return data
            
        }catch(error){
           Logger.error("Error in deleteProductById service",error);
            throw error;
        }
    }
}

export default ProductServices;