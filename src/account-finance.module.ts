import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountFinanceController } from './controllers/account-finance.controller';
import { AccountMongoRepository } from './repository/account.finance.repository';
import {
  AccountFinance,
  AccountFinanceSchema,
} from './schemas/account.finance.schema';
import { AccountFinanceService } from './services/account-finance.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: AccountFinance.name, schema: AccountFinanceSchema }],
      'Accounts',
    ),
  ],
  controllers: [AccountFinanceController],
  providers: [AccountFinanceService, AccountMongoRepository],
  exports: [AccountFinanceService],
})
export class AccountFinanceModule {}
