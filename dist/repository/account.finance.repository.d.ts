import { Model } from 'mongoose';
import { IAccount } from '../schemas/interfaces/account.finance.interface';
import { AccountFinance } from '../schemas/account.finance.schema';
export declare class AccountMongoRepository {
    private readonly accountFinanceModel;
    constructor(accountFinanceModel: Model<AccountFinance>);
    createAccount(account: IAccount): Promise<AccountFinance>;
    findById(_id: string): Promise<AccountFinance>;
    findAllAccounts(): Promise<AccountFinance[]>;
    findByAccountId(account_id: number): Promise<AccountFinance>;
}
