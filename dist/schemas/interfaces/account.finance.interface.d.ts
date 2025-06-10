import { ProductsEnum } from './enums/products.enum';
import { IError } from './error.interface';
export interface IAccount {
    account_id: number;
    limit: number;
    products: [ProductsEnum];
    errors?: IError[];
}
