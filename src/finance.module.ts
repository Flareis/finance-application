import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountFinanceController } from './controllers/account-finance.controller';
import { TransactionFinanceController } from './controllers/transaction-finance.controller';
import { AccountMongoRepository } from './repository/account.finance.repository';
import { TransactionMongoRepository } from './repository/transaction-finance.repository';
import {
  AccountFinance,
  AccountFinanceSchema,
} from './schemas/account.finance.schema';
import {
  TransactionFinance,
  TransactionFinanceShema,
} from './schemas/transaction-finance.schema';
import { AccountFinanceService } from './services/account-finance.service';
import { TransactionFinanceService } from './services/transaction-finance.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: AccountFinance.name, schema: AccountFinanceSchema }],
      'Accounts',
    ),
    MongooseModule.forFeature(
      [{ name: CustomersFinance.name, schema: CustomersFinanceSchema }],
      'Customers',
    ),
    MongooseModule.forFeature(
      [{ name: TransactionFinance.name, schema: TransactionFinanceShema }],
      'Transactions',
    ),
  ],
  controllers: [AccountFinanceController, TransactionFinanceController],
  providers: [
    AccountFinanceService,
    AccountMongoRepository,
    TransactionFinanceService,
    TransactionMongoRepository,
  ],
  exports: [AccountFinanceService, TransactionFinanceService],
})
export class FinanceModule {}
