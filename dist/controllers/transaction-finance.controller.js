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
exports.TransactionFinanceController = void 0;
const common_1 = require("@nestjs/common");
const transaction_finance_service_1 = require("../services/transaction-finance.service");
const create_transaction_finance_dto_1 = require("../dto/create-transaction-finance.dto");
let TransactionFinanceController = class TransactionFinanceController {
    constructor(transactionFinanceService) {
        this.transactionFinanceService = transactionFinanceService;
    }
    async createTransaction(data) {
        return this.transactionFinanceService.createTransaction(data);
    }
    async includeTransaction(account_id, data) {
        return this.transactionFinanceService.includeTransactions(account_id, data);
    }
    async findById(_id) {
        const transaction = this.transactionFinanceService.findById(_id);
        return transaction;
    }
    async findByAccountId(account_id) {
        const transaction = this.transactionFinanceService.findByAccountId(account_id);
        return transaction;
    }
    async findAllTransactions() {
        const transactions = this.transactionFinanceService.findAll();
        return transactions;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_finance_dto_1.CreateTransactionFinanceDto]),
    __metadata("design:returntype", Promise)
], TransactionFinanceController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Patch)(':account_id'),
    __param(0, (0, common_1.Param)('account_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_transaction_finance_dto_1.CreateTransactionFinanceDto]),
    __metadata("design:returntype", Promise)
], TransactionFinanceController.prototype, "includeTransaction", null);
__decorate([
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionFinanceController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/findAccountId/:account_id'),
    __param(0, (0, common_1.Param)('account_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionFinanceController.prototype, "findByAccountId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionFinanceController.prototype, "findAllTransactions", null);
TransactionFinanceController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_finance_service_1.TransactionFinanceService])
], TransactionFinanceController);
exports.TransactionFinanceController = TransactionFinanceController;
//# sourceMappingURL=transaction-finance.controller.js.map