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
exports.AccountFinanceService = void 0;
const common_1 = require("@nestjs/common");
const error_dto_1 = require("../dto/error.dto");
const account_finance_repository_1 = require("../repository/account.finance.repository");
const account_finance_schema_1 = require("../schemas/account.finance.schema");
const notFound = new account_finance_schema_1.AccountFinance();
notFound.error = new error_dto_1.ErrorDTO();
let AccountFinanceService = class AccountFinanceService {
    constructor(accountMongoRepository) {
        this.accountMongoRepository = accountMongoRepository;
    }
    async createAccount(account) {
        const findAccount = await this.findByAccountId(account.account_id);
        if (findAccount === null) {
            return await this.accountMongoRepository.createAccount(account);
        }
        else {
            notFound.error.errorCode = 'Status Code = 03';
            notFound.error.message = `Account whit ${account.account_id} already created.`;
            return notFound;
        }
    }
    async findById(_id) {
        const account = await this.accountMongoRepository.findById(_id);
        if (!account) {
            notFound.error.errorCode = 'Status Code = 01';
            notFound.error.message = `Account with ${_id} not found.`;
            return notFound;
        }
        return account;
    }
    async findByAccountId(account_id) {
        const account = await this.accountMongoRepository.findByAccountId(account_id);
        return account;
    }
    async findAll() {
        const accounts = await this.accountMongoRepository.findAllAccounts();
        return accounts;
    }
};
AccountFinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_finance_repository_1.AccountMongoRepository])
], AccountFinanceService);
exports.AccountFinanceService = AccountFinanceService;
//# sourceMappingURL=account-finance.service.js.map