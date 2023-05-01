import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountFinanceModule } from './account-finance.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountFinanceController } from './controllers/account-finance.controller';
import { AccountFinanceService } from './services/account-finance.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Analytics', {
      connectionName: 'Accounts',
    }),
    AccountFinanceModule,
  ],
})
export class AppModule {}
