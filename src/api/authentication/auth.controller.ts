import { Router, Response, Request, NextFunction } from 'express';
import Controller from '../../interfaces/controller.interface';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import { SUCCESS_MESSAGES } from '../../constant';
import AuthenticationValidation from './authentication.validation';
import Logger from '../../logger';
import AuthenticationService from './authentication.service';
class AuthController implements Controller {
  public path = '/auth';
  public router = Router();
  public authValidation = new AuthenticationValidation();
  public authService = new AuthenticationService();

  constructor() {
    this.initializeRoutes();
  }
  public initializeRoutes() {
    this.router.post(
      `${this.path}/login`,
      this.authValidation.loginvalidation(),
      this.userLogin
    );
  }

  public userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, otp } = req.body;
      if (Number(otp) !== 9898) {
        res.status(401);
        throw new Error('Invalid OTP');
      }
      const checkUserAndLogin = await this.authService.checkUserAndLogin(email);
      if(!checkUserAndLogin){
        res.status(500);
        throw new Error('Unable to login, please try again later');
      }

      return successMiddleware(
        {
          message: SUCCESS_MESSAGES.LOGIN_SUCCESSFULLY.replace(
            ':attribute',
            'Login'
          ),
          data: checkUserAndLogin,
        },
        req,
        res,
        next
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default AuthController;
