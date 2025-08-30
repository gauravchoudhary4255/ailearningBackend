import { NextFunction, Response, Request } from 'express';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import { ERROR_MESSAGES, PERMISSION, STATUS_CODE, USER_CONSTANT } from '../constant';
import HttpException from '../utils/httpException';
function hasRole(roles : any) {
    const roleMiddleware = async (
      request: Request,
      response: Response,
      next: NextFunction
    ): Promise<boolean> => {
      try {
        const req = request as RequestWithUser;
        const user = req.user;
        const userType = user?.userType;
       console.log(roles , "roles" , user.userType)
        if (USER_CONSTANT.ROLES.adminUser.includes(userType)) {
          // ✅ Only admins are allowed
          next();
          return true;
        }
  
        // ❌ Non-admins not allowed
        throw new HttpException(STATUS_CODE.NON_AUTHORITATIVE_INFORMATION,ERROR_MESSAGES.NOT_ACCESS);
  
      } catch (error) {
        next(error);
        return false;
      }
    };
  
    return roleMiddleware;
  }
  
  export default hasRole;

