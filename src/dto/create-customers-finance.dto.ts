import { ICustomersFinance } from 'src/schemas/interfaces/customers.finance.interface';
import { ITierAndDetails } from 'src/schemas/interfaces/tierAndDetails.interface';

export class CreateCustomersFinanceDTO implements ICustomersFinance {
  readonly id: number;
  readonly username: string;
  readonly name: string;
  readonly address: string;
  readonly birthdate: Date;
  readonly email: string;
  readonly accounts: number[];
  //readonly tierAndDetails: ITierAndDetails[];
}
