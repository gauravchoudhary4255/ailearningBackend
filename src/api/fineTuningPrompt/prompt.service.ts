import PromptModel from './prompt.model';
import { IPrompt } from './prompt.interface';
import HttpException from '../../utils/httpException';
import ProducAndServiceModel from '../product/product.model';
import { STATUS_CODE, ERROR_MESSAGES } from '../../constant';
import Logger from '../../logger';
class PromptService {
  public prompt = PromptModel;
  public services = ProducAndServiceModel;

  public checkTheService = async (serviceId: string) => {
    try {
      const checkTheServiceId = await this.services.find({ _id: serviceId , type :  "service" });

      if (!checkTheServiceId.length) {
        throw new HttpException(
          STATUS_CODE.NOT_FOUND,
          "Service "+ ERROR_MESSAGES.NOT_FOUND
        );
      }
      return true;
    } catch (error) {
      Logger.error(`error on checkService ${error}`);
      throw error;
    }
  };
  public addPromtForCources = async (promptData: IPrompt) => {
    try {
      const check = await this.checkTheService(promptData.serviceId);
      if (check) {
        const result = await PromptModel.updateOne(
          { serviceId: promptData.serviceId },   
          { $set: promptData },                  
          { upsert: true }   
        );

        return result
      }
      console.log(check, 'check this data ');
    } catch (error) {
      console.log(error);
      throw error
    }
  };
}

export default PromptService;
