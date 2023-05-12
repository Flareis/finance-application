import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Analytics', {
      connectionName: 'Accounts',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/Analytics', {
      connectionName: 'Transactions',
    }),
    FinanceModule,
  ],
})
export class AppModule {}
