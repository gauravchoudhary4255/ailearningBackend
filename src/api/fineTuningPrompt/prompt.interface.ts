export interface IPrompt {
    _id?: string;
    promptData?: string;
    serviceId: string;   // Reference to a Service model
    createdAt?: Date;
    updatedAt?: Date;
  }