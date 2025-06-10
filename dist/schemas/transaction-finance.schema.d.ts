/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
import { ErrorDTO } from '../dto/error.dto';
import { ITransactionFinance } from './interfaces/transaction-finance.interface';
import { ITransactions } from './interfaces/transactions.interface';
export type TransactionFinanceDocument = HydratedDocument<TransactionFinance>;
export declare class TransactionFinance implements ITransactionFinance {
    account_id: number;
    transaction_count: number;
    bucket_start_date: Date;
    bucket_end_date: Date;
    transactions: ITransactions[];
    error?: ErrorDTO;
}
export declare const TransactionFinanceShema: import("mongoose").Schema<TransactionFinance, import("mongoose").Model<TransactionFinance, any, any, any, import("mongoose").Document<unknown, any, TransactionFinance> & Omit<TransactionFinance & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TransactionFinance, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TransactionFinance>> & Omit<import("mongoose").FlatRecord<TransactionFinance> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
