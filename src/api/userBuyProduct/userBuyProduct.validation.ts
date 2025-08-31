import { body } from 'express-validator';
import validate from '../../middleware/validate.middleware'; // your custom validate middleware
import { ERROR_MESSAGES } from '../../constant'; // assuming you have this

class UserBuyProductValidation {
  userBuyProductValidation = () =>
    validate([
      body('productId')
        .isMongoId()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(':attribute', 'productId')
        )
        .isString()
        .withMessage('productId must be a string'),
      body('quantity')
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(':attribute', 'quantity')
        )
        .isInt({ min: 1 })
        .withMessage(
          ERROR_MESSAGES.COMMON.MINIMUM.replace(':attribute', 'quantity')
        )
        .isNumeric()
        .withMessage('productId must be a Number')
    ]);
}


export default UserBuyProductValidation;