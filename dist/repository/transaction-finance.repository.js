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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMongoRepository = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const transaction_finance_schema_1 = require("../schemas/transaction-finance.schema");
let TransactionMongoRepository = class TransactionMongoRepository {
    constructor(transactionFinanceModel) {
        this.transactionFinanceModel = transactionFinanceModel;
    }
    async createTransaction(transaction) {
        return this.transactionFinanceModel.create(transaction);
    }
    async includeTransactions(account_id, transactions) {
        await this.transactionFinanceModel
            .updateOne({ account_id: account_id }, { $set: transactions })
            .exec();
    }
    async findAllTransactions() {
        const transactions = await this.transactionFinanceModel.find({}).exec();
        return transactions;
    }
    async findByAccountId(account_id) {
        const transaction = await this.transactionFinanceModel
            .findOne({ account_id })
            .exec();
        return transaction;
    }
    async findById(_id) {
        const transaction = await this.transactionFinanceModel
            .findOne({ _id })
            .exec();
        return transaction;
    }
};
TransactionMongoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(transaction_finance_schema_1.TransactionFinance.name, 'Transactions')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TransactionMongoRepository);
exports.TransactionMongoRepository = TransactionMongoRepository;
//# sourceMappingURL=transaction-finance.repository.js.map