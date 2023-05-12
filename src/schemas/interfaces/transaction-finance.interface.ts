import { ITransactions } from './transactions.interface';

export interface ITransactionFinance {
  account_id: number;
  transaction_count: number;
  bucket_start_date: Date;
  bucket_end_date: Date;
  transactions: ITransactions;
}
