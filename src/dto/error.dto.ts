import { IError } from 'src/schemas/interfaces/error.interface';

export class ErrorDTO implements IError {
  errorCode: string;
  message: string;
}
