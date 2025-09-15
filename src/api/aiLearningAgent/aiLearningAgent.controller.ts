import { Router , Request , Response , NextFunction } from "express";
import Controller from "../../interfaces/controller.interface";
import Logger from "../../logger";
import { successMiddleware } from "../../middleware/responseApi.middleware";
import AILEASRNINGSERVICES from "./aiLearningAgent.service";
import HttpException from "../../utils/httpException";
class AiLearningAgent implements Controller{
    public  path = "/aiLearning";
    public router = Router();
    public aiServices = new AILEASRNINGSERVICES;

    constructor() {
        this.initializeRoutes();
      }
      public initializeRoutes() {
        this.router.post(
           `${this.path}/getagentResponse`,
            this.aiAgentResponse
        );
      }
    public aiAgentResponse = async(req : Request ,res : Response , next : NextFunction)=>{
       try{
            // const userId = req.user;
            const {serviceId ,  prompt} = req.body;
            console.log(serviceId , prompt ,"check waht im getting")
            if(!serviceId || !prompt){
                throw new HttpException(401 , "Prompt cannot be empty")
            }
            const data = {
                serviceId :serviceId,
                prompt : prompt
            }
        
             const getData =  await this.aiServices.agentResponse(data)
       return successMiddleware(
        {
            message : "Ai agent Response",
            data : getData
        },
        req,res, next
       )
        }catch(err){
        Logger.error(`Error in Ai agent response ${err}`)
       }
    }
}

export default AiLearningAgent;