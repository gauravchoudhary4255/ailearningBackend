import AuthController from './authentication/auth.controller';
import UserController from './user/user.controller';
import ProductContoller from './product/product.controller';
export = [new AuthController(), new UserController() , new ProductContoller()];
