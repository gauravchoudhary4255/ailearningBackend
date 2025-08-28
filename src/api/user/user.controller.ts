import Controller from '../../interfaces/controller.interface';
import { Router , Request ,Response , NextFunction } from 'express';
import{ ROUTES} from '../../constant';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import UserServices from './user.service';
import Logger from '../../logger';
class UserController implements Controller {
  public path = `/${ROUTES.ADMIN_USERS}/${ROUTES.USER}`;
  public router = Router();
  private userService = new UserServices();
//


   constructor(){
    this.initializeRoutes();
   }
initializeRoutes(){
   this.router.post(`${this.path}/list`,this.getUsersList);
}


  public getUsersList = async(
    req :Request ,
    res :Response,
     next :NextFunction ,
  )=>{
    try{
         const users = await this.userService.getAllUsers();
          return successMiddleware(
            {
              message: 'Users fetched successfully',
              data: users
            },
            req,
            res,
            next);
    }catch(err){
      Logger.error("Error in getUsersList controller",err);
    }
  }
}


export default UserController;