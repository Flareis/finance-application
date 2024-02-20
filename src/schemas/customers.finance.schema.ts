import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ICustomersFinance } from './interfaces/customers.finance.interface';
import { ITierAndDetails } from './interfaces/tierAndDetails.interface';

export type CustomersFinanceDocument = HydratedDocument<CustomersFinance>;

@Schema({
  collection: 'Customers',
})
export class CustomersFinance implements ICustomersFinance {
  @Prop({ required: true })
  username: string;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  birthdate: Date;

  @Prop()
  email: string;

  @Prop()
  accounts: number[];

  @Prop({ type: Object })
  tier_and_details?: ITierAndDetails;
}

export const CustomersFinanceSchema =
  SchemaFactory.createForClass(CustomersFinance);