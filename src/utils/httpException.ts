export default class HttpException extends Error {
    public status: number;
    public message: string;
  
    constructor(status: number, message: string) {
      super(message);
      this.status = status || 500;
      this.message = message;
  
      // Ensure prototype chain works
      Object.setPrototypeOf(this, HttpException.prototype);
    }
  }
  