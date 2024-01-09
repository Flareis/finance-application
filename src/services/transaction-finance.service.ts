import { Injectable } from '@nestjs/common';
import { CreateTransactionFinanceDto } from 'src/dto/create-transaction-finance.dto';
import { ErrorDTO } from 'src/dto/error.dto';
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

  async includeTransactions(
    account_id: number,
    transactionsDto: CreateTransactionFinanceDto,
  ): Promise<void> {
    const transaction = this.findByAccountId(account_id);
    (await transaction).transaction_count = transactionsDto.transaction_count;
    (await transaction).transactions = transactionsDto.transactions;
    const transactions =
      await this.transactionMongoRepository.includeTransactions(
        account_id,
        await transaction,
      );
    return transactions;

    /* const transaction = this.findByAccountId(account_id);
    (await transaction).transaction_count = transactionsDto.transaction_count;
    (await transaction).transactions = transactionsDto.transactions;

    if (transaction === null) {
      return await this.transactionMongoRepository.includeTransactions(
        account_id,
        await transaction,
      );
    } else {
      throw new BadRequestException(`Account with ${account_id} not found.`);
    } */
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
