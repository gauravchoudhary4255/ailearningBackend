import { body } from 'express-validator';
import validate from '../../middleware/validate.middleware';
class AuthenticationValidation {
  loginvalidation = () =>
    validate([
      body(`email`).notEmpty().isEmail().withMessage('Invalid email format'),
      body(`otp`).notEmpty()
        .isLength({ min: 4 })
        .withMessage('otp must be at least 4 characters long')
    ]);
}

export default AuthenticationValidation;
