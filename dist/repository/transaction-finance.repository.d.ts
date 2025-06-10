import { Model } from 'mongoose';
import { TransactionFinance } from '../schemas/transaction-finance.schema';
import { ITransactionFinance } from 'src/schemas/interfaces/transaction-finance.interface';
import { CreateTransactionFinanceDto } from 'src/dto/create-transaction-finance.dto';
export declare class TransactionMongoRepository {
    private readonly transactionFinanceModel;
    constructor(transactionFinanceModel: Model<TransactionFinance>);
    createTransaction(transaction: ITransactionFinance): Promise<TransactionFinance>;
    includeTransactions(account_id: number, transactions: CreateTransactionFinanceDto): Promise<void>;
    findAllTransactions(): Promise<TransactionFinance[]>;
    findByAccountId(account_id: number): Promise<TransactionFinance>;
    findById(_id: string): Promise<TransactionFinance>;
}
