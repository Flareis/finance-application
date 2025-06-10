import { SymbolEnum } from '../../src/schemas/interfaces/enums/symbol.enum';
import { TransactionCodeEnum } from '../../src/schemas/interfaces/enums/transaction-code.enum';
import { ITransactionFinance } from '../../src/schemas/interfaces/transaction-finance.interface';
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

  createsAccountFinanceDto(): IAccount[] {
    const data: IAccount[] = [
      {
        account_id: 552288,
        limit: 10000,
        products: [ProductsEnum.BROKERAGE],
        /* error: this.createErrorDto(), */
      },
    ];
    return data;
  }

  createErrorDto(): IError {
    const data: IError = {
      errorCode: 'dummy_error',
      message: 'dummy_message',
    };
    return data;
  }

  createTransactionFinanceDto(): ITransactionFinance {
    const data: ITransactionFinance = {
      account_id: 552288,
      transaction_count: 1,
      bucket_start_date: new Date(),
      bucket_end_date: new Date(),
      transactions: [
        {
          date: new Date(),
          amount: 8043,
          transaction_code: TransactionCodeEnum.SELL,
          symbol: SymbolEnum.ZINGA,
          price: '2.4728822',
          total: '19889.3921271',
        },
      ],
      error: this.createErrorDto(),
    };
    return data;
  }

  createTransactionsFinanceDto(): ITransactionFinance[] {
    const data: ITransactionFinance[] = [
      {
        account_id: 552288,
        transaction_count: 2,
        bucket_start_date: new Date(),
        bucket_end_date: new Date(),
        transactions: [
          {
            date: new Date(),
            amount: 8592,
            transaction_code: TransactionCodeEnum.BUY,
            symbol: SymbolEnum.FB,
            price: '6.25868566',
            total: '53774.627268',
          },
          {
            date: new Date(),
            amount: 5360,
            transaction_code: TransactionCodeEnum.SELL,
            symbol: SymbolEnum.CSCO,
            price: '6.8846943',
            total: '36901.961740',
          },
        ],
        error: this.createErrorDto(),
      },
    ];
    return data;
  }
}
