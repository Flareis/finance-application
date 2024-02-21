import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateCustomersFinanceDTO } from 'src/dto/create-customers-finance.dto';
import { ErrorException, idDontExist } from 'src/exceptions/errors.exception';
import { CustomersFinance } from '../schemas/customers.finance.schema';
import { CustomersFinanceService } from '../services/customers-finance.service';

@Controller('customers')
export class CustomersFinanceController {
  constructor(
    private readonly customersFinanceService: CustomersFinanceService,
  ) {}

  @Get(':_id')
  async findById(@Param('_id') _id: string): Promise<CustomersFinance> {
    if( mongoose.isObjectIdOrHexString(_id)){
      return this.customersFinanceService.findById(_id);
    } else {
      throw new idDontExist()
    }
    
  }

  @Get()
  async findAllCustomers(): Promise<CustomersFinance[]> {
    return this.customersFinanceService.findAll()
  }

  @Post()
  async createCustomer(
    @Body() data: CreateCustomersFinanceDTO,
  ): Promise<CustomersFinance>{
    return this.customersFinanceService.createCustomer(data);
  }

  @Patch(':_id')
  async updateCustomer(
    @Param('_id') _id: string,
    @Body() data: CreateCustomersFinanceDTO,
    ): Promise<void> {
    if( mongoose.isObjectIdOrHexString(_id)){
      return this.customersFinanceService.updateCustomer(_id, data)
    } else {
      throw new idDontExist()
    }
  }
}
