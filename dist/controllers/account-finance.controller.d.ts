import { CreateAccountFinanceDto } from '../dto/create-account-finance.dto';
import { AccountFinance } from '../schemas/account.finance.schema';
import { AccountFinanceService } from '../services/account-finance.service';
export declare class AccountFinanceController {
    private readonly accountFinanceService;
    constructor(accountFinanceService: AccountFinanceService);
    createAccount(data: CreateAccountFinanceDto): Promise<AccountFinance>;
    findById(_id: string): Promise<AccountFinance>;
    findByAccountId(account_id: number): Promise<AccountFinance>;
    findAllAccounts(): Promise<AccountFinance[]>;
}
