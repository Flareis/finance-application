import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorsException extends HttpException {
  constructor() {
    super('ID not found', HttpStatus.FORBIDDEN);
  }
}

export class ErrorException extends HttpException {
  constructor() {
    super('account_id not found', HttpStatus.FORBIDDEN);
  }
}

export class idDontExist extends HttpException {
  constructor() {
    super(`This id isn't valid.`, HttpStatus.FORBIDDEN);
  }
}