import { Injectable } from '@nestjs/common';
import { ErrorException, ErrorsException } from 'src/exceptions/errors.exception';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomersFinanceDTO } from 'src/dto/create-customers-finance.dto';
import { CustomersFinance } from 'src/schemas/customers.finance.schema';

@Injectable()
export class CustomersMongoRepository {
  constructor(
    @InjectModel(CustomersFinance.name, 'Customers')
    private readonly customersFinanceModel: Model<CustomersFinance>,
  ) {}

  async findById(_id: string): Promise<CustomersFinance> {
    return await this.customersFinanceModel.findOne({ _id }).exec();
  }

  async findAllCustomers(): Promise<CustomersFinance[]> {
   return await this.customersFinanceModel.find({}).exec();
  }

  async updateCustomer ( 
    _id: string, 
    customer: CreateCustomersFinanceDTO,
    ): Promise<void> {
    await this.customersFinanceModel
    .updateOne({ _id: _id }, { $set: customer})
    .exec();
  }

  async createCustomer(customer: CustomersFinance): Promise<CustomersFinance> {
    return this.customersFinanceModel.create(customer);
  }
}
