import { body } from "express-validator"; 
import validate  from '../../middleware/validate.middleware';
import { ERROR_MESSAGES } from "../../constant";
class PromptVaildation{
     addPromptValidation = () =>
      validate([
        body("serviceId")
          .notEmpty()
          .withMessage(
            ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "serviceId")
          )
          .isString()
          .withMessage("serviceId must be a string"),
        body("promptData")
          .notEmpty()
          .withMessage(
            ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "promptData")
          )
          .isString()
          .withMessage("promptData must be an object")
      ]);
}

export default PromptVaildation;