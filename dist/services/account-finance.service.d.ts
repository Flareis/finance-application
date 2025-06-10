import { AccountMongoRepository } from '../repository/account.finance.repository';
import { AccountFinance } from '../schemas/account.finance.schema';
export declare class AccountFinanceService {
    private readonly accountMongoRepository;
    constructor(accountMongoRepository: AccountMongoRepository);
    createAccount(account: AccountFinance): Promise<AccountFinance>;
    findById(_id: string): Promise<AccountFinance>;
    findByAccountId(account_id: number): Promise<AccountFinance>;
    findAll(): Promise<AccountFinance[]>;
}
