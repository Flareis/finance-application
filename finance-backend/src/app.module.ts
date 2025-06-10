import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance.module';

@Module({
  imports: [
    
    FinanceModule,
  ],
})
export class AppModule {}