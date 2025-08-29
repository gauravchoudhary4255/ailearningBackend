import { body } from "express-validator";
import  validate  from "../../middleware/validate.middleware"; // your custom validate middleware
import { ERROR_MESSAGES } from "../../constant"; // assuming you have this

class ProductAndServicesValidation {
  createProductAndCoursesValidation = () =>
    validate([
      body("name")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "name")
        )
        .isString()
        .withMessage("name must be a string"),

      body("description")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "description")
        )
        .isString()
        .withMessage("description must be a string"),

      body("price")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "price")
        )
        .isFloat({ min: 1 })
        .withMessage(
          ERROR_MESSAGES.COMMON.MINIMUM.replace(":attribute", "price")
        ),

      body("category")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "category")
        )
        .isString()
        .withMessage("category must be a string"),

      body("image")
        .optional()
        .isString()
        .withMessage("image must be a string"),

      body("inStock")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "inStock")
        )
        .isBoolean()
        .withMessage("inStock must be a boolean"),

      body("rating")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "rating")
        )
        .isFloat({ min: 0, max: 5 })
        .withMessage(
          ERROR_MESSAGES.COMMON.BETWEEN.replace(":attribute", "rating")
            .replace(":min", "0")
            .replace(":max", "5")
        ),

      body("numberOfProducts")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "numberOfProducts")
        )
        .isInt({ min: 1 })
        .withMessage("numberOfProducts must be a non-negative integer"),

      body("type")
        .notEmpty()
        .withMessage(
          ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "type")
        )
        .isString()
        .withMessage("type must be a string"),
    ]);

    getProductAndServiceBy = ()=>{
        return validate([
        body("_id").notEmpty().withMessage(ERROR_MESSAGES.COMMON.REQUIRED.replace(":attribute", "_id"))
        .isMongoId().withMessage("Invalid _id format"),
        ])
    }
}

export default  ProductAndServicesValidation;