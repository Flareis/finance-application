import { Injectable, NotFoundException } from '@nestjs/common';
import { ErrorDTO } from 'src/dto/error.dto';
import { AccountMongoRepository } from 'src/repository/account.finance.repository';
import { AccountFinance } from 'src/schemas/account.finance.schema';

@Injectable()
export class AccountFinanceService {
  constructor(
    private readonly accountMongoRepository: AccountMongoRepository,
  ) {}

  /*  async createAccount(account: AccountFinance): Promise<AccountFinance> {
    const createdAccount = await this.accountMongoRepository.createAccount(
      account,
    );
    return createdAccount;
  } */

  async createAccount(account: AccountFinance): Promise<AccountFinance> {
    const findAccount = await this.findByAccountId(account.account_id);
    if (findAccount === null) {
      return await this.accountMongoRepository.createAccount(account);
    } else {
      const alreadyAccount = new AccountFinance();
      alreadyAccount.error = new ErrorDTO();
      alreadyAccount.error.errorCode = 'Status Code = 02';
      alreadyAccount.error.message = `Account whit ${account.account_id} already created.`;
      return alreadyAccount;

      /* const a = new AccountFinance();
      a.error = new AccountFinanceError();
      a.error.errorCode = '1';
      a.error.message = 'Conta ja existente';
      return a; */
    }

    /*const findAccount = this.findByAccountId(account.account_id) 
      if (!findAccount == null) {
      return this.accountMongoRepository.createAccount(account);
    } else {
      throw new Error(`Account whit ${account.account_id} already created.`);
    } */
  }

  async findById(_id: string): Promise<AccountFinance> {
    const account = await this.accountMongoRepository.findById(_id);
    if (!account) {
      const notFoundId = new AccountFinance();
      notFoundId.error = new ErrorDTO();
      notFoundId.error.errorCode = 'Status Code = 01';
      notFoundId.error.message = `Account with ${_id} not found.`;
      return notFoundId;
      // throw new NotFoundException(`Account with ${_id} not found.`);
    }
    return account;
  }

  async findByAccountId(account_id: number): Promise<AccountFinance> {
    const account = await this.accountMongoRepository.findByAccountId(
      account_id,
    );
    if (!account) {
      const notFoundAccount = new AccountFinance();
      notFoundAccount.error = new ErrorDTO();
      notFoundAccount.error.errorCode = 'Status Code = 02';
      notFoundAccount.error.message = `Account whit ${account_id} not found.`;
      return notFoundAccount;
      // throw new NotFoundException(`Account whit ${account_id} not found.`);
    }
    return account;
  }

  async findAll(): Promise<AccountFinance[]> {
    const accounts = await this.accountMongoRepository.findAllAccounts();
    return accounts;
  }
}
