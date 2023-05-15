import { Injectable } from '@nestjs/common';
import { TransactionMongoRepository } from '../repository/transaction-finance.repository';
import { TransactionFinance } from '../schemas/transaction-finance.schema';

@Injectable()
export class TransactionFinanceService {
  constructor(
    private readonly transactionMongoRepository: TransactionMongoRepository,
  ) {}

  async createTransaction(
    transaction: TransactionFinance,
  ): Promise<TransactionFinance> {
    await this.transactionMongoRepository.createTransaction(transaction);
    return transaction;
  }

  async findByAccountId(account_id: number): Promise<TransactionFinance> {
    const transaction = await this.transactionMongoRepository.findByAccountId(
      account_id,
    );
    return transaction;
  }

  async findAll(): Promise<TransactionFinance[]> {
    const transactions =
      await this.transactionMongoRepository.findAllTransactions();
    return transactions;
  }

  async findById(_id: string): Promise<TransactionFinance> {
    const transaction = await this.transactionMongoRepository.findById(_id);
    return transaction;
  }
}
