import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateTransactionFinanceDto } from '../dto/creat-transaction-finance.dto';
import { TransactionFinanceService } from '../services/transaction-finance.service';
import { TransactionFinance } from '../schemas/transaction-finance.schema';
import { ITransactions } from 'src/schemas/interfaces/transactions.interface';

@Controller('transaction')
export class TransactionFinanceController {
  constructor(
    private readonly transactionFinanceService: TransactionFinanceService,
  ) {}

  @Post()
  async createTransaction(
    @Body() data: CreateTransactionFinanceDto,
  ): Promise<TransactionFinance> {
    return this.transactionFinanceService.createTransaction(data);
  }
  @Patch(':account_id')
  async includeTransaction(
    @Param('account_id') account_id: number,
    @Body() data: ITransactions[],
  ): Promise<void> {
    return this.transactionFinanceService.updateTransactions(account_id, data);
  }

  @Get(':_id')
  async findById(@Param('_id') _id: string): Promise<TransactionFinance> {
    const transaction = this.transactionFinanceService.findById(_id);
    return transaction;
  }

  @Get('/findAccountId/:account_id')
  async findByAccountId(
    @Param('account_id') account_id: number,
  ): Promise<TransactionFinance> {
    const transaction =
      this.transactionFinanceService.findByAccountId(account_id);
    return transaction;
  }

  @Get()
  async findAllTransactions(): Promise<TransactionFinance[]> {
    const transactions = this.transactionFinanceService.findAll();
    return transactions;
  }
}
