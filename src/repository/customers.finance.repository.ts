import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomersFinance } from 'src/schemas/customers.finance.schema';

@Injectable()
export class CustomersMongoRepository {
  constructor(
    @InjectModel(CustomersFinance.name, 'Customers')
    private readonly customersFinanceModel: Model<CustomersFinance>,
  ) {}

  async findById(_id: string): Promise<CustomersFinance> {
    const customer = await this.customersFinanceModel.findOne({ _id }).exec();
    return customer;
  }
}
