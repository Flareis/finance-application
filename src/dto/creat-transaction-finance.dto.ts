import { AccountFinance } from 'src/schemas/account.finance.schema';
import { ITransactions } from 'src/schemas/interfaces/transactions.interface';

export class CreateTransactionFinanceDto {
  readonly account_id: AccountFinance;
  readonly transaction_count: number;
  readonly bucket_start_date: Date;
  readonly bucket_end_date: Date;
  readonly transactions: ITransactions[];
}
