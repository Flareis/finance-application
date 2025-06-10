"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const account_finance_controller_1 = require("./controllers/account-finance.controller");
const transaction_finance_controller_1 = require("./controllers/transaction-finance.controller");
const account_finance_repository_1 = require("./repository/account.finance.repository");
const transaction_finance_repository_1 = require("./repository/transaction-finance.repository");
const account_finance_schema_1 = require("./schemas/account.finance.schema");
const transaction_finance_schema_1 = require("./schemas/transaction-finance.schema");
const account_finance_service_1 = require("./services/account-finance.service");
const transaction_finance_service_1 = require("./services/transaction-finance.service");
let FinanceModule = class FinanceModule {
};
FinanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: account_finance_schema_1.AccountFinance.name, schema: account_finance_schema_1.AccountFinanceSchema }], 'Accounts'),
            mongoose_1.MongooseModule.forFeature([{ name: transaction_finance_schema_1.TransactionFinance.name, schema: transaction_finance_schema_1.TransactionFinanceShema }], 'Transactions'),
        ],
        controllers: [account_finance_controller_1.AccountFinanceController, transaction_finance_controller_1.TransactionFinanceController],
        providers: [
            account_finance_service_1.AccountFinanceService,
            account_finance_repository_1.AccountMongoRepository,
            transaction_finance_service_1.TransactionFinanceService,
            transaction_finance_repository_1.TransactionMongoRepository,
        ],
        exports: [account_finance_service_1.AccountFinanceService, transaction_finance_service_1.TransactionFinanceService],
    })
], FinanceModule);
exports.FinanceModule = FinanceModule;
//# sourceMappingURL=finance.module.js.map