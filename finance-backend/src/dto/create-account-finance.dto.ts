import { IAccount } from 'finance-backend/src/schemas/interfaces/account.finance.interface';
import { ProductsEnum } from 'finance-backend/src/schemas/interfaces/enums/products.enum';
import { ErrorDTO } from './error.dto';

export class CreateAccountFinanceDto implements IAccount {
  readonly account_id: number;
  readonly limit: number;
  readonly products: [ProductsEnum];
  readonly error: ErrorDTO;
}
