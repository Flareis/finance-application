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
exports.AccountMongoRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const account_finance_schema_1 = require("../schemas/account.finance.schema");
let AccountMongoRepository = class AccountMongoRepository {
    constructor(accountFinanceModel) {
        this.accountFinanceModel = accountFinanceModel;
    }
    async createAccount(account) {
        return this.accountFinanceModel.create(account);
    }
    async findById(_id) {
        const accountDocument = await this.accountFinanceModel
            .findOne({ _id })
            .exec();
        return accountDocument;
    }
    async findAllAccounts() {
        const accounts = await this.accountFinanceModel.find({}).exec();
        return accounts;
    }
    async findByAccountId(account_id) {
        const accountId = await this.accountFinanceModel
            .findOne({ account_id })
            .exec();
        return accountId;
    }
};
AccountMongoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(account_finance_schema_1.AccountFinance.name, 'Accounts')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccountMongoRepository);
exports.AccountMongoRepository = AccountMongoRepository;
//# sourceMappingURL=account.finance.repository.js.map