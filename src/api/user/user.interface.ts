export interface User {
    _id: string;
    name?: string;
    email: string;
    userType?:string;
    createdAt?: Date;
    updatedAt?: Date;
}

