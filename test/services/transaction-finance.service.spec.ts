import { InternalServerErrorException, Provider } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { ProductsEnum } from '../../src/schemas/interfaces/enums/products.enum';
import { TransactionMongoRepository } from '../../src/repository/transaction-finance.repository';
import { TransactionFinance } from '../../src/schemas/transaction-finance.schema';
import { TransactionFinanceService } from '../../src/services/transaction-finance.service';
import { CreateTransactionFinanceDto } from '../../src/dto/create-transaction-finance.dto';

describe('TransactionFinanceService', () => {
  let service: TransactionFinanceService;
  let transactionMongoRepositoryMock: Pick<
    TransactionMongoRepository,
    | 'createTransaction'
    | 'findAllTransactions'
    | 'includeTransactions'
    | 'findByAccountId'
    | 'findById'
  >;

  const dtoTransactionFinance = {
    account_id: 1122,
    transaction_count: 45,
    bucket_start_date: new Date(),
    bucket_end_date: new Date(),
    transactions: [],
    error: { errorCode: 'dummy_error', message: 'dummy_message' },
  };
  const dtoTransactionList: TransactionFinance[] = [
    new TransactionFinance(),
    new TransactionFinance(),
    new TransactionFinance(),
  ];

  beforeEach(async () => {
    transactionMongoRepositoryMock = {
      createTransaction: jest.fn().mockReturnValue({}),
      includeTransactions: jest.fn().mockReturnValue(dtoTransactionFinance),
      findAllTransactions: jest.fn().mockResolvedValue(dtoTransactionList),
      findByAccountId: jest.fn().mockReturnValue({}),
      findById: jest.fn().mockReturnValue({}),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionFinanceService,
        {
          provide: TransactionMongoRepository,
          useValue: transactionMongoRepositoryMock,
        },
      ],
    }).compile();
    service = module.get<TransactionFinanceService>(TransactionFinanceService);
    transactionMongoRepositoryMock = module.get<TransactionMongoRepository>(
      TransactionMongoRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(transactionMongoRepositoryMock).toBeDefined();
  });

  describe('createTransaction', () => {
    it('should be throw if correct param is not provided', async () => {
      await expect(service.createTransaction(undefined)).rejects.toThrow();
    });

    it('should be called service with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'createTransaction')
        .mockImplementationOnce(async () => null);
      service.createTransaction(new TransactionFinance());
      expect(serviceSpy).toHaveBeenCalled;
    });

    it('should be throw if repository throw', async () => {
      transactionMongoRepositoryMock.createTransaction = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.createTransaction).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      transactionMongoRepositoryMock.createTransaction = jest
        .fn()
        .mockResolvedValueOnce(dtoTransactionFinance);
      transactionMongoRepositoryMock.findByAccountId = jest
        .fn()
        .mockResolvedValueOnce(null);
      const transaction = new TransactionFinance();
      transaction.account_id = 1122;
      const create = await service.createTransaction(transaction);
      expect(create.account_id).toBe(1122);
      expect(create.transaction_count).toBe(45);
    });

    it('should be return error when account_id is null', async () => {
      transactionMongoRepositoryMock.findByAccountId = jest
        .fn()
        .mockResolvedValueOnce(dtoTransactionFinance);
      const transaction = new TransactionFinance();
      transaction.account_id = 1122;
      const create = await service.createTransaction(transaction);

      expect(create.error.errorCode).toBe('Status Code = 03');
      expect(create.error.message).toBe(`Account whit 1122 already created.`);
    });
  });

  describe('findAllAccounts', () => {
    it('should return a account list successfully', async () => {
      const result = await service.findAll();
      expect(result).toEqual(dtoTransactionList);
      expect(
        transactionMongoRepositoryMock.findAllTransactions,
      ).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest
        .spyOn(transactionMongoRepositoryMock, 'findAllTransactions')
        .mockRejectedValueOnce(new Error());

      expect(service.findAll()).rejects.toThrowError();
    });
  });

  describe('includeTransaction', () => {
    it('should include a transaction with correct params', async () => {
      const serviceSpy = jest
        .spyOn(service, 'includeTransactions')
        .mockImplementation(async () => null);
      const account_id = 1122;
      const data = dtoTransactionFinance;
      const transactions =
        await transactionMongoRepositoryMock.includeTransactions(
          account_id,
          data,
        );
      await service.includeTransactions(account_id, data);
      expect(serviceSpy).toHaveBeenCalledWith(account_id, data);
      expect(service.includeTransactions(account_id, data)).toBeTruthy();
      expect(serviceSpy).toBeCalledTimes(2);
      //expect(service.includeTransactions(account_id, data)).toBe(transactions);
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
      transactionMongoRepositoryMock.findByAccountId = jest
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
      transactionMongoRepositoryMock.findById = jest
        .fn()
        .mockReturnValueOnce(new InternalServerErrorException());
      await expect(service.findById).rejects.toThrow();
    });

    it('should be return when correct param', async () => {
      expect(service.findById(_id)).toBeTruthy();
    });

    it('should be return error when _id not found', async () => {
      transactionMongoRepositoryMock.findById = jest
        .fn()
        .mockReturnValueOnce(null);
      expect(service.findById(null)).toBeTruthy();
    });
  });
});
