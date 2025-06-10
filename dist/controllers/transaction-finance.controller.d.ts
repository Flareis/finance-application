import { TransactionFinanceService } from '../services/transaction-finance.service';
import { TransactionFinance } from '../schemas/transaction-finance.schema';
import { CreateTransactionFinanceDto } from '../dto/create-transaction-finance.dto';
export declare class TransactionFinanceController {
    private readonly transactionFinanceService;
    constructor(transactionFinanceService: TransactionFinanceService);
    createTransaction(data: CreateTransactionFinanceDto): Promise<TransactionFinance>;
    includeTransaction(account_id: number, data: CreateTransactionFinanceDto): Promise<void>;
    findById(_id: string): Promise<TransactionFinance>;
    findByAccountId(account_id: number): Promise<TransactionFinance>;
    findAllTransactions(): Promise<TransactionFinance[]>;
}
