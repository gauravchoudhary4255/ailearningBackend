// import { NextFunction, Response, Request } from 'express';
// import * as jwt from 'jsonwebtoken';
// import UserModel from '../api/user/user.model';
// import DataStoredInToken from '../interfaces/dataStoredInToken';
// import RequestWithUser from '../interfaces/requestWithUser.interface';
// import { SUCCESS_MESSAGES, ERROR_MESSAGES, STATUS_CODE, USER_CONSTANT, REDIS_KEYS_CONSTANT } from '../constant';
// import getconfig from '../config';
// import { MongoService } from '../utils';
// const { JWT_SECRET } = getconfig();
// import moment from 'moment';
// import MaintenanceModel from '../api/setting/maintenance/maintenance.model';
// import { successMiddleware } from './responseAPI.middleware';
// // import redisUtil from '../utils/redisOperation';

// async function authMiddleware(
//   request: Request,
//   response: Response,
//   next: NextFunction
// ): Promise<boolean> {
//   try {
//     const User = UserModel;
//     const req = request as RequestWithUser;
//     const secret = JWT_SECRET;
//     const authHeader = req.headers.authorization as string;
//     const verificationResponse = jwt.verify(
//       authHeader,
//       secret
//     ) as DataStoredInToken;
//     const _id = verificationResponse._id;
//     const user = await MongoService.findOne(User, {
//       query: { _id }
//     });

//     if (!user) {
//       response.statusCode = STATUS_CODE.FORBIDDEN;
//       throw new Error(ERROR_MESSAGES.TOKEN_EXPIRED);
//     }

//     ///// Server Maintenance /////
//     if (user.role == USER_CONSTANT.ROLES.user) {
//       const now = new Date();
//       const isMaintenanceExists = await MongoService.findOne(MaintenanceModel, {
//         query: { isActive: true, startDate: { $lte: new Date(now) }, endDate: { $gt: new Date(now) } }
//       });

//       // const isMaintenanceExists: any = await redisUtil.getKey(REDIS_KEYS_CONSTANT.MAINTENANCE);

//       if (isMaintenanceExists && isMaintenanceExists.isActive) {
//         const currentDate: any = new Date()
//         const startDate: any = new Date(isMaintenanceExists.startDate)
//         const endDate: any = new Date(isMaintenanceExists.endDate)

//         if (startDate <= currentDate && endDate > currentDate) {

//           const dateDifference: any = (Math.abs(endDate - currentDate) / 1000); // time in seconds
//           isMaintenanceExists.dateDifference = dateDifference

//           return successMiddleware(
//             {
//               message: SUCCESS_MESSAGES.MAINTENANCE.UNDER_MAINTENANCE,
//               data: isMaintenanceExists
//             },
//             request,
//             response,
//             next
//           );
//         }
//       }
//     }

//     if (user.isBlock) {
//       response.statusCode = STATUS_CODE.UNAUTHORIZED;
//       throw new Error(ERROR_MESSAGES.BLOCKED_USER);
//     }

//     if (user.isUserDeleteAcount) {
//       const defaultHours = USER_CONSTANT.USER_DELETE_ACCOUNT_DAYS * 24
//       const now = moment();
//       const userDeleteAccountDate = moment(user.userDeleteAccountAt);
//       let daysDiffUserDeleteAccount = now.diff(userDeleteAccountDate, 'hours');

//       if (daysDiffUserDeleteAccount > defaultHours) {
//         response.statusCode = STATUS_CODE.FORBIDDEN;
//         throw new Error(ERROR_MESSAGES.USER_ACC_DELETED);
//       }
//     }

//     if (user.role == USER_CONSTANT.ROLES.user) {
//       if (authHeader != user.token && user.token != "") {
//         response.statusCode = STATUS_CODE.FORBIDDEN;
//         throw new Error(ERROR_MESSAGES.ALREADY_LOGIN);
//       }
//     }

//     req.user = user;
//     next();
//     return true;
//   } catch (error) {
//     next(error);
//     return false;
//   }
// }

// export default authMiddleware;
