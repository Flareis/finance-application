import { IAccount } from '../../src/schemas/interfaces/account.finance.interface';
import { ProductsEnum } from '../../src/schemas/interfaces/enums/products.enum';
import { IError } from '../../src/schemas/interfaces/error.interface';

export class DTOFactoryMock {
  createAccountFinanceDto(): IAccount {
    const data: IAccount = {
      account_id: 552288,
      limit: 10000,
      products: [ProductsEnum.BROKERAGE],
      /* error: this.createErrorDto(), */
    };
    return data;
  }

  createErrorDto(): IError {
    const data: IError = {
      errorCode: 'dummy_error',
      message: 'dummy_message',
    };
    return data;
  }
}
