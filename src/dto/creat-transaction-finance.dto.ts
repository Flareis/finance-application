import { ITransactionFinance } from 'src/schemas/interfaces/transaction-finance.interface';
import { ITransactions } from 'src/schemas/interfaces/transactions.interface';

export class CreateTransactionFinanceDto implements ITransactionFinance {
  readonly account_id: number;
  readonly transaction_count: number;
  readonly bucket_start_date: Date;
  readonly bucket_end_date: Date;
  readonly transactions: ITransactions[];
}
