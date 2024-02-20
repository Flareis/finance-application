import { Injectable } from '@nestjs/common';
import { CreateCustomersFinanceDTO } from 'src/dto/create-customers-finance.dto';
import { CustomersMongoRepository } from '../repository/customers.finance.repository';
import { CustomersFinance } from '../schemas/customers.finance.schema';

@Injectable()
export class CustomersFinanceService {
  constructor(
    private readonly customersMongoRepository: CustomersMongoRepository,
  ) {}

  async findById(_id: string): Promise<CustomersFinance> {
    const customer = await this.customersMongoRepository.findById(_id);
    return customer;
  }

  async findAll(): Promise<CustomersFinance[]> {
    return await this.customersMongoRepository.findAllCustomers()
  }

  async createCustomer(customer: CustomersFinance): Promise<CustomersFinance> {
    const newCustomer = await this.customersMongoRepository.createCustomer(
      customer,
    );
    return newCustomer;
  }

  async updateCustomer(
    _id: string,
    customerDto: CreateCustomersFinanceDTO
  ): Promise<void> {
    const customer = this.findById(_id);
    (await customer).username = customerDto.username;
    (await customer).address = customerDto.address;
    (await customer).email = customerDto.email;
    const updateCustomer = await this.customersMongoRepository.updateCustomer( _id, await customer)
    return updateCustomer;
  }
}
