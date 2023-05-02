import { IAccount } from './interfaces/account.finance.interface';
import { ProductsEnum } from './interfaces/enums/products.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ErrorDTO } from '../dto/error.dto';

export type AccountFinanceDocument = HydratedDocument<AccountFinance>;

@Schema({
  collection: 'Accounts',
})
export class AccountFinance implements IAccount {
  @Prop({
    index: {
      unique: true,
    },
  })
  account_id: number;

  @Prop()
  limit: number;

  @Prop()
  products: [ProductsEnum];

  @Prop()
  error: ErrorDTO;
}

export const AccountFinanceSchema =
  SchemaFactory.createForClass(AccountFinance);
