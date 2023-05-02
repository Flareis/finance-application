import { Injectable, NotFoundException } from '@nestjs/common';
import { ErrorDTO } from '../dto/error.dto';
import { AccountMongoRepository } from '../repository/account.finance.repository';
import { AccountFinance } from '../schemas/account.finance.schema';

const notFound = new AccountFinance();
notFound.error = new ErrorDTO();
@Injectable()
export class AccountFinanceService {
  constructor(
    private readonly accountMongoRepository: AccountMongoRepository,
  ) {}

  async createAccount(account: AccountFinance): Promise<AccountFinance> {
    const findAccount = await this.findByAccountId(account.account_id);
    if (findAccount === null) {
      return await this.accountMongoRepository.createAccount(account);
    } else {
      notFound.error.errorCode = 'Status Code = 03';
      notFound.error.message = `Account whit ${account.account_id} already created.`;
      return notFound;
    }
  }

  async findById(_id: string): Promise<AccountFinance> {
    const account = await this.accountMongoRepository.findById(_id);
    if (!account) {
      notFound.error.errorCode = 'Status Code = 01';
      notFound.error.message = `Account with ${_id} not found.`;
      return notFound;
    }
    return account;
  }

  async findByAccountId(account_id: number): Promise<AccountFinance> {
    const account = await this.accountMongoRepository.findByAccountId(
      account_id,
    );
    /* if (!account) {
      notFound.error.errorCode = 'Status Code = 02';
      notFound.error.message = `Account whit ${account_id} not found.`;
      return notFound;
    } */
    return account;
  }

  async findAll(): Promise<AccountFinance[]> {
    const accounts = await this.accountMongoRepository.findAllAccounts();
    return accounts;
  }
}
