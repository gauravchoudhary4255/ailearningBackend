import logger from "../../logger";
import UserModel from "./user.model";
import HttpException from '../../utils/httpException';

class UserServices{
public user = UserModel;


public getAllUsers = async()=>{
    try{
          return this.user.find({userType : 'User'});
    }catch(err){
        logger.error("Error in getAllUsers service",err);
        throw new HttpException(500,"Internal Server Error");
    }
}
public getUserById = async(id:string)=>{
  return this.user.findById(id).lean();
}
}


export default UserServices;