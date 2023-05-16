import { Injectable } from '@nestjs/common';
import { ErrorDTO } from 'src/dto/error.dto';
import { ITransactions } from 'src/schemas/interfaces/transactions.interface';
import { TransactionMongoRepository } from '../repository/transaction-finance.repository';
import { TransactionFinance } from '../schemas/transaction-finance.schema';

const notFound = new TransactionFinance();
notFound.error = new ErrorDTO();
@Injectable()
export class TransactionFinanceService {
  constructor(
    private readonly transactionMongoRepository: TransactionMongoRepository,
  ) {}

  async createTransaction(
    transaction: TransactionFinance,
  ): Promise<TransactionFinance> {
    const findTransaction = await this.findByAccountId(transaction.account_id);

    if (findTransaction === null) {
      return await this.transactionMongoRepository.createTransaction(
        transaction,
      );
    } else {
      notFound.error.errorCode = 'Status Code = 03';
      notFound.error.message = `Account whit ${transaction.account_id} already created.`;
      return notFound;
    }
  }

  async updateTransactions(
    account_id: number,
    transactions: ITransactions[],
  ): Promise<void> {
    const transaction =
      await this.transactionMongoRepository.updateTransactions(
        account_id,
        transactions,
      );
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
