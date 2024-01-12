import { Controller, Get, Param } from '@nestjs/common';
import { CustomersFinance } from '../schemas/customers.finance.schema';
import { CustomersFinanceService } from '../services/customers-finance.service';

@Controller('customers')
export class CustomersFinanceController {
  constructor(
    private readonly customersFinanceService: CustomersFinanceService,
  ) {}

  @Get(':_id')
  async findById(@Param('_id') _id: string): Promise<CustomersFinance> {
    const customer = this.customersFinanceService.findById(_id);
    return customer;
  }
}
