export interface UserBuyProduct{
    userId: string;      // Reference to User
    productId: string;   // Reference to Product
    quantity: number;            // Quantity of product
    productStatus?: string; // Status of the product purchase 
  }