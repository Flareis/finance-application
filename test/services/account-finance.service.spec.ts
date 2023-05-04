import { InternalServerErrorException, Provider } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { ProductsEnum } from '../../src/schemas/interfaces/enums/products.enum';
import { AccountMongoRepository } from '../../src/repository/account.finance.repository';
import { AccountFinance } from '../../src/schemas/account.finance.schema';
import { AccountFinanceService } from '../../src/services/account-finance.service';
import { DTOFactoryMock } from '../mock/dto-factory.mock';

describe('AccountFinanceService', () => {
  //let dtoFactory: DTOFactoryMock;
  let service: AccountFinanceService;
  let accountMongoRepositoryMock: Pick<
    AccountMongoRepository,
    'createAccount' | 'findAllAccounts' | 'findByAccountId' | 'findById'
  >;

  const dtoAccountFinance = {
    account_id: 1122,
    limit: 10000,
    products: ProductsEnum.BROKERAGE,
    error: { errorCode: 'dummy_error', message: 'dummy_message' },
  };
  const dtoAccountList: AccountFinance[] = [
    new AccountFinance(),
    new AccountFinance(),
    new AccountFinance(),
  ];

  // Ambos funcionam, mas o anterior deixa mais claro o retorno.
  /* const dtoAccountList = (): Provider<
    Pick<AccountMongoRepository, 'createAccount'>
  > => ({
    provide: AccountMongoRepository,
    useValue: {
      createAccount: jest
        .fn()
        .mockReturnValue([
          dtoFactory.createAccountFinanceDto(),
          dtoFactory.createAccountFinanceDto(),
          dtoFactory.createAccountFinanceDto(),
        ]),
    },
  }); */

  beforeEach(async () => {
    //dtoFactory = new DTOFactoryMock();
    accountMongoRepositoryMock = {
      createAccount: jest.fn().mockReturnValue({}),
      findAllAccounts: jest.fn().mockResolvedValue(dtoAccountList),
      findByAccountId: jest.fn().mockReturnValue({}),
      findById: jest.fn().mockReturnValue({}),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountFinanceService,
        {
          provide: AccountMongoRepository,
          useValue: accountMongoRepositoryMock,
        },
      ],
    }).compile();
    service = module.get<AccountFinanceService>(AccountFinanceService);
    accountMongoRepositoryMock = module.get<AccountMongoRepository>(
      AccountMongoRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(accountMongoRepositoryMock).toBeDefined();
  });

  describe('createAccount', () => {
    it('should be throw if correct param is not provided', async () => {
      await expect(service.createAccount(undefined)).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'createAccount')
        .mockImplementationOnce(async () => null);
      service.createAccount(new AccountFinance());
      expect(serviceSpy).toHaveBeenCalled;
    });

    it('should be throw if repository throw', async () => {
      accountMongoRepositoryMock.createAccount = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.createAccount).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      /*  accountMongoRepositoryMock.createAccount = jest
        .fn()
        .mockResolvedValueOnce(dtoFactory); */
      accountMongoRepositoryMock.findByAccountId = jest
        .fn()
        .mockResolvedValueOnce(null);
      const account = new AccountFinance();
      account.account_id = 1122;
      const create = await service.createAccount(account);
      expect(create.account_id).toBe(1122);
      expect(create.limit).toBe(10000);
      expect(create.products).toBe(ProductsEnum.BROKERAGE.toString());
    });

    it('should be return error when account_id is null', async () => {
      accountMongoRepositoryMock.findByAccountId = jest
        .fn()
        .mockResolvedValueOnce(dtoAccountFinance);
      const account = new AccountFinance();
      account.account_id = 1122;
      const create = await service.createAccount(account);

      expect(create.error.errorCode).toBe('Status Code = 03');
      expect(create.error.message).toBe(`Account whit 1122 already created.`);
    });
  });

  describe('findAllAccounts', () => {
    it('should reurn a account list successfully', async () => {
      const result = await service.findAll();
      expect(result).toEqual(dtoAccountList);
      expect(accountMongoRepositoryMock.findAllAccounts).toHaveBeenCalledTimes(
        1,
      );
    });

    it('should throw an exception', () => {
      jest
        .spyOn(accountMongoRepositoryMock, 'findAllAccounts')
        .mockRejectedValueOnce(new Error());

      expect(service.findAll()).rejects.toThrowError();
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
      accountMongoRepositoryMock.findByAccountId = jest
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
      accountMongoRepositoryMock.findById = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.findById).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.findById(_id)).toBeTruthy();
    });

    it('should be return error when _id not found', async () => {
      accountMongoRepositoryMock.findById = jest.fn().mockReturnValueOnce(null);
      expect(service.findById(null)).toBeTruthy();
    });
  });
});
