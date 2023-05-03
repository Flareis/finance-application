import { InternalServerErrorException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { AccountMongoRepository } from '../../src/repository/account.finance.repository';
import { AccountFinance } from '../../src/schemas/account.finance.schema';
import { AccountFinanceService } from '../../src/services/account-finance.service';
import { DTOFactoryMock } from '../mock/dto-factory.mock';

describe('AccountFinanceService', () => {
  let accountMongoRepository: Pick<
    AccountMongoRepository,
    'createAccount' | 'findAllAccounts' | 'findByAccountId' | 'findById'
  >;
  let dtoFactory: DTOFactoryMock;
  let service: AccountFinanceService;

  beforeEach(async () => {
    dtoFactory = new DTOFactoryMock();
    accountMongoRepository = {
      createAccount: jest.fn().mockReturnValue({}),
      findAllAccounts: jest.fn().mockReturnValue([dtoFactory]),
      findByAccountId: jest.fn().mockReturnValue({}),
      findById: jest.fn().mockReturnValue({}),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountFinanceService,
        { provide: AccountMongoRepository, useValue: accountMongoRepository },
      ],
    }).compile();
    service = module.get<AccountFinanceService>(AccountFinanceService);
    accountMongoRepository.createAccount = jest
      .fn()
      .mockImplementationOnce(async () => new AccountFinance());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAccount', () => {
    it('should be throw if correct param is not provided', async () => {
      await expect(service.createAccount(undefined)).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'createAccount')
        .mockImplementationOnce(async () => null);
      service.createAccount;
      expect(serviceSpy).toHaveBeenCalled;
    });

    it('should be throw if repository throw', async () => {
      accountMongoRepository.createAccount = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.createAccount).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.createAccount).toBeTruthy();
    });
  });

  describe('findAllAccounts', () => {
    it('should be throw if correct param is not provided', async () => {
      await expect(service.findAll).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'findAll')
        .mockImplementationOnce(async () => null);
      service.findAll;
      expect(serviceSpy).toHaveBeenCalled;
    });

    it('should be throw if repository throw', async () => {
      accountMongoRepository.findAllAccounts = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.findAll).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.findAll).toBeTruthy();
    });
  });

  describe('findByAccountId', () => {
    const account_id = 889977;
    it('should be throw if correct param is not provided', async () => {
      await expect(service.findByAccountId).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'findByAccountId')
        .mockImplementationOnce(async () => null);
      await service.findByAccountId(account_id);
      expect(serviceSpy).toHaveBeenCalledWith(account_id);
    });

    it('should be throw if repository throw', async () => {
      accountMongoRepository.findByAccountId = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.findByAccountId).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.findByAccountId(account_id)).toBeTruthy();
    });
  });

  describe('findById', () => {
    const _id = '644ed2b0689157020a55f867';
    it('should be throw if correct param is not provided', async () => {
      await expect(service.findById).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'findById')
        .mockImplementationOnce(async () => null);
      await service.findById(_id);
      expect(serviceSpy).toHaveBeenCalledWith(_id);
    });

    it('should be throw if repository throw', async () => {
      accountMongoRepository.findById = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.findById).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.findById(_id)).toBeTruthy();
    });
  });
});
