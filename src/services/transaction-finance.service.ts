import { Injectable } from '@nestjs/common';
import { TransactionMongoRepository } from '../repository/transaction-finance.repository';
import { TransactionFinance } from '../schemas/transaction-finance.schema';

@Injectable()
export class TransactionFinanceService {
  constructor(
    private readonly transactionMongoRepository: TransactionMongoRepository,
  ) {}

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
}
