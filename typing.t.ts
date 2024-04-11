export interface Business {
  _id?: string;
  businessName: string;
  businessEmail: string;
  type: string;
  businessPhone: string;
  country: string;
  city: string;
  createdAt?: Date;
  updatedAt?: Date;
}
