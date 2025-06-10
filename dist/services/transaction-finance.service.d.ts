import { CreateTransactionFinanceDto } from 'src/dto/create-transaction-finance.dto';
import { TransactionMongoRepository } from '../repository/transaction-finance.repository';
import { TransactionFinance } from '../schemas/transaction-finance.schema';
export declare class TransactionFinanceService {
    private readonly transactionMongoRepository;
    constructor(transactionMongoRepository: TransactionMongoRepository);
    createTransaction(transaction: TransactionFinance): Promise<TransactionFinance>;
    includeTransactions(account_id: number, transactionsDto: CreateTransactionFinanceDto): Promise<void>;
    findByAccountId(account_id: number): Promise<TransactionFinance>;
    findAll(): Promise<TransactionFinance[]>;
    findById(_id: string): Promise<TransactionFinance>;
}
