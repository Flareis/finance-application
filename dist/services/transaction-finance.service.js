"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFinanceService = void 0;
const common_1 = require("@nestjs/common");
const error_dto_1 = require("../dto/error.dto");
const transaction_finance_repository_1 = require("../repository/transaction-finance.repository");
const transaction_finance_schema_1 = require("../schemas/transaction-finance.schema");
const notFound = new transaction_finance_schema_1.TransactionFinance();
notFound.error = new error_dto_1.ErrorDTO();
let TransactionFinanceService = class TransactionFinanceService {
    constructor(transactionMongoRepository) {
        this.transactionMongoRepository = transactionMongoRepository;
    }
    async createTransaction(transaction) {
        const findTransaction = await this.findByAccountId(transaction.account_id);
        if (findTransaction === null) {
            return await this.transactionMongoRepository.createTransaction(transaction);
        }
        else {
            notFound.error.errorCode = 'Status Code = 03';
            notFound.error.message = `Account whit ${transaction.account_id} already created.`;
            return notFound;
        }
    }
    async includeTransactions(account_id, transactionsDto) {
        const transaction = this.findByAccountId(account_id);
        (await transaction).transaction_count = transactionsDto.transaction_count;
        (await transaction).transactions = transactionsDto.transactions;
        const transactions = await this.transactionMongoRepository.includeTransactions(account_id, await transaction);
        return transactions;
    }
    async findByAccountId(account_id) {
        const transaction = await this.transactionMongoRepository.findByAccountId(account_id);
        return transaction;
    }
    async findAll() {
        const transactions = await this.transactionMongoRepository.findAllTransactions();
        return transactions;
    }
    async findById(_id) {
        const transaction = await this.transactionMongoRepository.findById(_id);
        return transaction;
    }
};
TransactionFinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_finance_repository_1.TransactionMongoRepository])
], TransactionFinanceService);
exports.TransactionFinanceService = TransactionFinanceService;
//# sourceMappingURL=transaction-finance.service.js.map