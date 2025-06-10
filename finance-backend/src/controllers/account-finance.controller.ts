import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAccountFinanceDto } from '../dto/create-account-finance.dto';
import { AccountFinance } from '../schemas/account.finance.schema';
import { AccountFinanceService } from '../services/account-finance.service';

@Controller('account')
export class AccountFinanceController {
  constructor(private readonly accountFinanceService: AccountFinanceService) {}

  @Post()
  async createAccount(
    @Body() data: CreateAccountFinanceDto,
  ): Promise<AccountFinance> {
    return this.accountFinanceService.createAccount(data);
  }

  @Get(':_id')
  async findById(@Param('_id') _id: string): Promise<AccountFinance> {
    const account = this.accountFinanceService.findById(_id);
    return account;
  }

  @Get('/findAccountId/:account_id')
  async findByAccountId(
    @Param('account_id') account_id: number,
  ): Promise<AccountFinance> {
    const account = this.accountFinanceService.findByAccountId(account_id);
    return account;
  }

  @Get()
  async findAllAccounts(): Promise<AccountFinance[]> {
    const accounts = this.accountFinanceService.findAll();
    return accounts;
  }
}
