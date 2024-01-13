import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustomersFinanceDTO } from 'src/dto/create-customers-finance.dto';
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

  @Post()
  async createCustomer(
    @Body() data: CreateCustomersFinanceDTO,
  ): Promise<CustomersFinance>{
    return this.customersFinanceService.createCustomer(data);
  }
}
