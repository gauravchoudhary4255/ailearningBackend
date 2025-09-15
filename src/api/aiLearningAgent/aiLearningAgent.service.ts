import PromtpModel from '../fineTuningPrompt/prompt.model';
import getconfig from '../../config';
const { GEMINI_API_KEY } = getconfig();
import { GoogleGenAI } from '@google/genai';
import Logger from '../../logger';
import HttpException from '../../utils/httpException';
class AILEASRNINGSERVICES {
  public prompt = PromtpModel;

  public agentResponse = async (data: any) => {
    try {
   console.log(data)
      const getPrompt = await this.prompt.findOne({
        serviceId: data.serviceId
      });
    if(!getPrompt){
        throw new HttpException(402 , "Service is unavailable")
    }
      const ai: any = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: getPrompt?.promptData }] // your static / fine-tuned instruction
          },
          {
            role: 'user',
            parts: [{ text: data?.prompt }] // actual user input
          }
        ]
      });
    
    const repsonseMessage =  response?.candidates?.[0]?.content?.parts[0]?.text
console.log(repsonseMessage , "check this ")
    // const getDta = response;
       return repsonseMessage;
    } catch(error){
        Logger.error(`error in agentResponse ${error}`)
    }
  };
}
export default AILEASRNINGSERVICES;
