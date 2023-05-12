import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITransactionFinance } from './interfaces/transaction-finance.interface';
import { ITransactions } from './interfaces/transactions.interface';

@Schema({
  collection: 'Transactions',
})
export class TransactionFinance implements ITransactionFinance {
  @Prop()
  account_id: number;

  @Prop()
  transaction_count: number;

  @Prop()
  bucket_start_date: Date;

  @Prop()
  bucket_end_date: Date;

  @Prop()
  transactions: ITransactions;
}

export const TransactionFinanceShema =
  SchemaFactory.createForClass(TransactionFinance);
