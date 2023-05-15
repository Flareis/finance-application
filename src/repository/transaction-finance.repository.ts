import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionFinance } from '../schemas/transaction-finance.schema';
import { ITransactionFinance } from 'src/schemas/interfaces/transaction-finance.interface';

@Injectable()
export class TransactionMongoRepository {
  constructor(
    @InjectModel(TransactionFinance.name, 'Transactions')
    private readonly transactionFinanceModel: Model<TransactionFinance>,
  ) {}

  async createTransaction(
    transaction: ITransactionFinance,
  ): Promise<TransactionFinance> {
    return this.transactionFinanceModel.create(transaction);
  }

  async findAllTransactions(): Promise<TransactionFinance[]> {
    const transactions = await this.transactionFinanceModel.find({}).exec();
    return transactions;
  }

  async findByAccountId(account_id: number): Promise<TransactionFinance> {
    const transaction = await this.transactionFinanceModel
      .findOne({ account_id })
      .exec();
    return transaction;
  }

  async findById(_id: string): Promise<TransactionFinance> {
    const transaction = await this.transactionFinanceModel
      .findOne({ _id })
      .exec();
    return transaction;
  }
}
