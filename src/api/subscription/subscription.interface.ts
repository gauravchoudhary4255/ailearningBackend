export interface Subscription {
    _id: string;
    userId: string;
    serviceId: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
}