import AuthController from './authentication/auth.controller';
import UserController from './user/user.controller';
import ProductContoller from './product/product.controller';
import UserProductBuyController from './userBuyProduct/userBuyProduct.controller';
export = [
  new AuthController(),
  new UserController(),
  new ProductContoller(),
  new UserProductBuyController()
];
