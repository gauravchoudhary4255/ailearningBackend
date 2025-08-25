import UserModel from '../user/user.model';
import { User } from '../user/user.interface';
import TokenData from '../../interfaces/tokenData.interface';
import DataStoredInToken from '../../interfaces/dataStoredToken.interface';
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

  public checkUserAndLogin = async (email: string) :Promise<any> => {
    try {
      const user = await this.user.findOne({ emal: email }).exec();
      if (user) {
        const tokenData = await this.createToken(user);
        return { tokenData };
      } else {
        return this.createUser(email, 'User');
      }
    } catch (error) {
        Logger.error(`Unable to login for email: ${email} - ${error}`);
      throw new Error('Unable to login, please try again later');
    }
  };

  public createUser = async (email: string, userType: string) => {
    try {
      const user = await this.user.create({ email, userType });
      if(!user){
        throw new Error('User creation failed');
      }
      if (user) {
        const tokenData = await this.createToken(user);
        return { tokenData };
      }
      return user;
    } catch (err) {
        console.log(err , "checj this erppr")
      throw new Error('User creation failed');
    }
  };
}

export default AuthenticationService;
