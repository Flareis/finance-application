import { Injectable } from '@nestjs/common';
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
}
