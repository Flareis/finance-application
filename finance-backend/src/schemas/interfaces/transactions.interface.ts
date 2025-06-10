import { SymbolEnum } from './enums/symbol.enum';
import { TransactionCodeEnum } from './enums/transaction-code.enum';

export interface ITransactions {
  date: Date;
  amount: number;
  transaction_code: TransactionCodeEnum;
  symbol: SymbolEnum;
  price: string;
  total: string;
}
