import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerErrorException } from '@nestjs/common';
import { AccountFinanceController } from '../../src/controllers/account-finance.controller';
import { AccountFinanceService } from '../../src/services/account-finance.service';
import { CreateAccountFinanceDto } from '../../src/dto/create-account-finance.dto';

describe('AccountFinanceController', () => {
  let sut: AccountFinanceController;
  let service: AccountFinanceService;
  let dtoAccountMock: CreateAccountFinanceDto;

  beforeEach(async () => {
    dtoAccountMock = new CreateAccountFinanceDto();
    const mockSevice = {
      getOperations: jest.fn().mockReturnValue({}),
      getFindAccount: jest.fn().mockReturnValue([]),
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AccountFinanceService,
          useFactory: () => mockSevice,
        },
      ],
      controllers: [AccountFinanceController],
    }).compile();

    sut = app.get<AccountFinanceController>(AccountFinanceController);
    service = app.get<AccountFinanceService>(AccountFinanceService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('createAccount', () => {
    it('should be thrw if correct param is not provided', () => {
      expect(sut.createAccount(undefined)).rejects.toThrow();
    });

    it('should be throw when service throw', async () => {
      service.createAccount = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(sut.createAccount(dtoAccountMock)).rejects.toThrow(
        InternalServerErrorException,
      );
    });

    it('should be called service whit corrects params', async () => {
      await sut.findAllAccounts;
      expect(service.findAll).toHaveBeenCalled;
    });

    /*  it('should be called service whit corrects params', async () => {
      const _id = '998877';
      await sut.findById(_id);
      expect(service.findById).toHaveBeenCalledWith(_id);
    }); */

    it('should be throw when AccountFinanceService.findByAccountId throw', async () => {
      service.findByAccountId = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(sut.findByAccountId(998877)).rejects.toThrow();
    });
  });
});
