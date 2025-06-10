import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerErrorException } from '@nestjs/common';
import { AccountFinanceController } from '../../src/controllers/account-finance.controller';
import { CreateAccountFinanceDto } from '../../src/dto/create-account-finance.dto';
import { AccountFinance } from '../../src/schemas/account.finance.schema';
import { AccountFinanceService } from '../../src/services/account-finance.service';
import { ProductsEnum } from '../../src/schemas/interfaces/enums/products.enum';

const dtoAccountList: AccountFinance[] = [
  new AccountFinance(),
  new AccountFinance(),
  new AccountFinance(),
];

const newAccountSchema = new AccountFinance();
describe('AccountFinanceController', () => {
  let controller: AccountFinanceController;
  let service: AccountFinanceService;
  let dtoAccountMock: CreateAccountFinanceDto;

  beforeEach(async () => {
    dtoAccountMock = new CreateAccountFinanceDto();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountFinanceController],
      providers: [
        {
          provide: AccountFinanceService,
          useValue: {
            createAccount: jest.fn().mockReturnValue({}),
            findAll: jest.fn().mockResolvedValue(dtoAccountList),
            findByAccountId: jest.fn().mockReturnValue({}),
            findById: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<AccountFinanceController>(AccountFinanceController);
    service = module.get<AccountFinanceService>(AccountFinanceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('createAccount', () => {
    it('should return a account list successfully', async () => {
      const body: CreateAccountFinanceDto = {
        account_id: 1122,
        limit: 10000,
        products: [ProductsEnum.BROKERAGE],
        error: { errorCode: 'dummy_error', message: 'dummy_message' },
      };
      const result = await controller.createAccount(body); //Act
      expect(result).toEqual(newAccountSchema); //Assert
      expect(service.createAccount).toHaveBeenCalledTimes(1);
      expect(service.createAccount).toHaveBeenCalledWith(body);
    });
    it('should be throw when service throw', async () => {
      service.createAccount = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(controller.createAccount(dtoAccountMock)).rejects.toThrow(
        InternalServerErrorException,
      );
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(service, 'createAccount').mockRejectedValueOnce(new Error());
      // Assert
      expect(controller.createAccount).rejects.toThrowError();
    });
  });

  describe('findByAccountId', () => {
    it('should be throw when AccountFinanceService.findByAccountId throw', async () => {
      service.findByAccountId = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(controller.findByAccountId(998877)).rejects.toThrow();
      expect(service.findByAccountId).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(service, 'findByAccountId').mockRejectedValueOnce(new Error());
      // Assert
      expect(controller.findByAccountId).rejects.toThrowError();
    });
  });

  describe('findById', () => {
    it('should be called service whit corrects params', async () => {
      const _id = '998877';
      await controller.findById(_id);
      expect(service.findById).toHaveBeenCalledWith(_id);
      expect(service.findById).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(service, 'findById').mockRejectedValueOnce(new Error());
      // Assert
      expect(controller.findById).rejects.toThrowError();
    });
  });
  describe('findAllAccounts', () => {
    it('should return a account list successfully', async () => {
      const result = await controller.findAllAccounts(); //Act
      expect(result).toEqual(dtoAccountList); //Assert
      expect(typeof result).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());
      // Assert
      expect(controller.findAllAccounts).rejects.toThrowError();
    });
  });
});
