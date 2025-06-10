import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAccount } from '../schemas/interfaces/account.finance.interface';
import { AccountFinance } from '../schemas/account.finance.schema';

@Injectable()
export class AccountMongoRepository {
  constructor(
    @InjectModel(AccountFinance.name, 'Accounts')
    private readonly accountFinanceModel: Model<AccountFinance>,
  ) {}

  async createAccount(account: IAccount): Promise<AccountFinance> {
    return this.accountFinanceModel.create(account);
  }

  async findById(_id: string): Promise<AccountFinance> {
    /* if (!_id) {
      throw new BadRequestException();
    } */
    const accountDocument = await this.accountFinanceModel
      .findOne({ _id })
      .exec();
    return accountDocument;
  }

  async findAllAccounts(): Promise<AccountFinance[]> {
    const accounts = await this.accountFinanceModel.find({}).exec();
    return accounts;
  }

  async findByAccountId(account_id: number): Promise<AccountFinance> {
    const accountId = await this.accountFinanceModel
      .findOne({ account_id })
      .exec();
    return accountId;
  }
}
