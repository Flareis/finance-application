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
exports.AccountFinanceSchema = exports.AccountFinance = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const error_dto_1 = require("../dto/error.dto");
let AccountFinance = class AccountFinance {
};
__decorate([
    (0, mongoose_1.Prop)({
        index: {
            unique: true,
        },
    }),
    __metadata("design:type", Number)
], AccountFinance.prototype, "account_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], AccountFinance.prototype, "limit", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], AccountFinance.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", error_dto_1.ErrorDTO)
], AccountFinance.prototype, "error", void 0);
AccountFinance = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'Accounts',
    })
], AccountFinance);
exports.AccountFinance = AccountFinance;
exports.AccountFinanceSchema = mongoose_1.SchemaFactory.createForClass(AccountFinance);
//# sourceMappingURL=account.finance.schema.js.map