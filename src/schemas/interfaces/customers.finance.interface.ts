import { ITierAndDetails } from './tierAndDetails.interface';

export interface ICustomersFinance {
  id: number;
  username: string;
  name: string;
  address: string;
  birthdate: Date;
  email: string;
  accounts: number[];
  //tierAndDetails: ITierAndDetails[];
}
