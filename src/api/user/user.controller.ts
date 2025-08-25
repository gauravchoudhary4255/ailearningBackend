import Controller from '../../interfaces/controller.interface';
import { Router } from 'express';
class User implements Controller {
  public path = `/users`;
  public router = Router();
  

  public getUser = async()=>{
    try{

    }catch(err){
      
    }
  }
}
