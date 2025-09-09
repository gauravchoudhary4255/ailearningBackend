import Controller from '../../interfaces/controller.interface';
import { Router, Request, Response, NextFunction } from 'express';
import PromptService from './prompt.service';
import { IPrompt } from './prompt.interface';
import { successMiddleware } from '../../middleware/responseApi.middleware';
import PromptVaildation from './prompt.validation';
class PromptController implements Controller {
  public path = '/fine-tuning-prompt';
  public router = Router();
  public prompServices = new PromptService();
  public promptValidation = new PromptVaildation();

  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes = () => {
    this.router.post(
      `${this.path}/addPrompt`,
      this.promptValidation.addPromptValidation(),
      this.addPrompt
    );
  };

  public addPrompt = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { promptData, serviceId } = req.body;
      let prompObj: IPrompt = {
        promptData,
        serviceId
      };
      const createPrompt = await this.prompServices.addPromtForCources(
        prompObj
      );
      return successMiddleware(
        {
          message: 'Prompt Added Successfully',
          data: createPrompt
        },
        req,
        res,
        next
      );
    } catch (error) {
      next(error);
    }
  };
  // Controller methods will go here
}

export default PromptController;
