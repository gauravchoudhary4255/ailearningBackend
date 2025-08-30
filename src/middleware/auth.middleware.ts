import { NextFunction, Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import UserModel from '../api/user/user.model';
import DataStoredInToken from '../interfaces/dataStoredToken.interface';
 import RequestWithUser from '../interfaces/requestWithUser.interface';
import { SUCCESS_MESSAGES, ERROR_MESSAGES, STATUS_CODE, USER_CONSTANT, REDIS_KEYS_CONSTANT } from '../constant';
import getconfig from '../config';
import { MongoService } from '../utils';
const { JWT_SECRET } = getconfig();
import moment from 'moment';
import { successMiddleware } from '../middleware/responseApi.middleware';
import HttpException from '../utils/httpException';
import { error } from 'console';
async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<boolean> {
  try {
    const User = UserModel;
    const req = request as RequestWithUser;
    const secret = JWT_SECRET as string;
    const authHeader = req.headers.authorization as string;
    const verificationResponse = jwt.verify(
        authHeader,
        secret
    )  as DataStoredInToken;
    console.log(verificationResponse , "check this")
    const _id = verificationResponse._id;
    const user = await MongoService.findOne(User, {
      query: { _id }
    });

    if (!user) {
      throw new HttpException(STATUS_CODE.FORBIDDEN,ERROR_MESSAGES.TOKEN_EXPIRED);
    }

    req.user = user;
    next();
    return true;
  } catch (error) {
    next(error);
    return false;
  }
}

export default authMiddleware;
