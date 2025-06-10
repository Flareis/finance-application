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
exports.TransactionFinanceShema = exports.TransactionFinance = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const error_dto_1 = require("../dto/error.dto");
let TransactionFinance = class TransactionFinance {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TransactionFinance.prototype, "account_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TransactionFinance.prototype, "transaction_count", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], TransactionFinance.prototype, "bucket_start_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], TransactionFinance.prototype, "bucket_end_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], TransactionFinance.prototype, "transactions", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", error_dto_1.ErrorDTO)
], TransactionFinance.prototype, "error", void 0);
TransactionFinance = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'Transactions',
    })
], TransactionFinance);
exports.TransactionFinance = TransactionFinance;
exports.TransactionFinanceShema = mongoose_1.SchemaFactory.createForClass(TransactionFinance);
//# sourceMappingURL=transaction-finance.schema.js.map