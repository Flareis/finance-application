import { IError } from '../../src/schemas/interfaces/error.interface';
export declare class ErrorDTO implements IError {
    errorCode: string;
    message: string;
}
