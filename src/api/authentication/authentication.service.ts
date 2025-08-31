import UserModel from '../user/user.model';
import { User } from '../user/user.interface';
import TokenData from '../../interfaces/tokenData.interface';
import DataStoredInToken from '../../interfaces/dataStoredToken.interface';
import HttpException from '../../utils/httpException';
import getconfig from '../../config';
const { JWT_SECRET, ENV } = getconfig();
import jwt from 'jsonwebtoken';
import Logger from '../../logger';
class AuthenticationService {
  public user = UserModel;

  private async createToken(user: User): Promise<TokenData> {
    const expiresIn = 24 * 60 * 60;
    // const expiresIn = 5 * 60; // 5 minutes temporary for test
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, JWT_SECRET || '', { expiresIn })
    };
  }

  public checkUserAndLogin = async (email: string): Promise<any> => {
    try {
      const user = await this.user.findOne({ email :email }).lean();
      console.log("User found:", user);
      if (user) {
        const tokenData = await this.createToken(user);
        return { tokenData };
      } else {
        console.log("Creating new user as not found")
        return await this.createUser(email, 'User');
      }
    } catch (error) {
      Logger.error(`Unable to login for email: ${email} - ${error}`);
      throw new HttpException(500, 'Unable to login, please try again later');
    }
  };

  public createUser = async (email: string, userType: string): Promise<any> => {
    try {
      const user = await this.user.create({ email, userType });
      if (user) {
        const tokenData = await this.createToken(user);
        return { tokenData };
      }
    } catch (err) {
      Logger.error(`Error in createUser service: ${err} and stack: ${err}`);
      throw new HttpException(500, 'User creation failed');
    }
  };
}

export default AuthenticationService;
