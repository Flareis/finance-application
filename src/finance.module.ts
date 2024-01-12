import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountFinanceController } from './controllers/account-finance.controller';
import { CustomersFinanceController } from './controllers/costumers-finance.controller';
import { TransactionFinanceController } from './controllers/transaction-finance.controller';
import { AccountMongoRepository } from './repository/account.finance.repository';
import { CustomersMongoRepository } from './repository/customers.finance.repository';
import { TransactionMongoRepository } from './repository/transaction-finance.repository';
import {
  AccountFinance,
  AccountFinanceSchema,
} from './schemas/account.finance.schema';
import {
  CustomersFinance,
  CustomersFinanceSchema,
} from './schemas/customers.finance.schema';
import {
  TransactionFinance,
  TransactionFinanceShema,
} from './schemas/transaction-finance.schema';
import { AccountFinanceService } from './services/account-finance.service';
import { CustomersFinanceService } from './services/customers-finance.service';
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
  controllers: [
    AccountFinanceController,
    TransactionFinanceController,
    CustomersFinanceController,
  ],
  providers: [
    AccountFinanceService,
    AccountMongoRepository,
    TransactionFinanceService,
    TransactionMongoRepository,
    CustomersFinanceService,
    CustomersMongoRepository,
  ],
  exports: [
    AccountFinanceService,
    TransactionFinanceService,
    CustomersFinanceService,
  ],
})
export class FinanceModule {}
