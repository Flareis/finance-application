import { Test, TestingModule } from '@nestjs/testing';
import { SymbolEnum } from '../../src/schemas/interfaces/enums/symbol.enum';
import { TransactionFinance } from '../../src/schemas/transaction-finance.schema';
import { CreateTransactionFinanceDto } from '../../src/dto/create-transaction-finance.dto';
import { TransactionFinanceService } from '../../src/services/transaction-finance.service';
import { TransactionCodeEnum } from '../../src/schemas/interfaces/enums/transaction-code.enum';
import { TransactionFinanceController } from '../../src/controllers/transaction-finance.controller';
import { InternalServerErrorException } from '@nestjs/common';
import { DTOFactoryMock } from 'finance-backend/test/mock/dto-factory.mock';
import exp from 'constants';

const dtoTransactionList: TransactionFinance[] = [
  new TransactionFinance(),
  new TransactionFinance(),
  new TransactionFinance(),
];

const newTransactionSchema = new TransactionFinance();

describe('TransactionFinanceController', () => {
  let controller: TransactionFinanceController;
  let service: TransactionFinanceService;
  let dtoTransactionMock: CreateTransactionFinanceDto;

  beforeEach(async () => {
    dtoTransactionMock = new CreateTransactionFinanceDto();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionFinanceController],
      providers: [
        {
          provide: TransactionFinanceService,
          useValue: {
            createTransaction: jest.fn().mockReturnValue({}),
            includeTransaction: jest.fn().mockReturnValue({}),
            findAll: jest.fn().mockResolvedValue(dtoTransactionList),
            findByAccountId: jest.fn().mockReturnValue({}),
            findById: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<TransactionFinanceController>(
      TransactionFinanceController,
    );
    service = module.get<TransactionFinanceService>(TransactionFinanceService);
  });

  describe('should be defined', () => {
    // expect(controller).toBeDefined();
    expect(service).toBeDefined;
  });

  describe('createTransaction', () => {
    it('should return a transaction list successfully', async () => {
      const body: CreateTransactionFinanceDto = {
        account_id: 1122,
        transaction_count: 1,
        bucket_start_date: new Date(),
        bucket_end_date: new Date(),
        transactions: [
          {
            date: new Date(),
            amount: 8043,
            transaction_code: TransactionCodeEnum.SELL,
            symbol: SymbolEnum.ZINGA,
            price: '2.4728822',
            total: '19889.3921271',
          },
        ],
        error: { errorCode: 'dummy_error', message: 'dummy_message' },
      };
      const result = await controller.createTransaction(body);
      expect(result).toEqual(newTransactionSchema);
      expect(service.createTransaction).toHaveBeenCalledTimes(1);
      expect(service.createTransaction).lastCalledWith(body);
    });

    it('should be throw when service throw', async () => {
      service.createTransaction = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(
        controller.createTransaction(dtoTransactionMock),
      ).rejects.toThrow(InternalServerErrorException);
    });

    it('should throw an exception', () => {
      jest
        .spyOn(service, 'createTransaction')
        .mockRejectedValueOnce(new Error());
      expect(controller.createTransaction).rejects.toThrowError();
    });
  });

  /* describe('includeTransaction', () => {
    it('should include transaction with de correct params', async () => {
      const body: CreateTransactionFinanceDto = {
        account_id: 1122,
        transaction_count: 1,
        bucket_start_date: new Date(),
        bucket_end_date: new Date(),
        transactions: [
          {
            date: new Date(),
            amount: 8043,
            transaction_code: TransactionCodeEnum.SELL,
            symbol: SymbolEnum.ZINGA,
            price: '2.4728822',
            total: '19889.3921271',
          },
        ],
        error: { errorCode: 'dummy_error', message: 'dummy_message' },
      };
      const account_id = 998877;
      await controller.includeTransaction(account_id, body);
      expect(service.includeTransactions).toHaveBeenCalledWith(
        account_id,
        body,
      );
    });
  }); */

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

  describe('findByAccountId', () => {
    it('should be called service whit corrects params', async () => {
      const account_id = 998877;
      await controller.findByAccountId(account_id);
      expect(service.findByAccountId).toHaveBeenCalledWith(account_id);
      expect(service.findByAccountId).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findByAccountId').mockRejectedValueOnce(new Error());
      expect(controller.findByAccountId).rejects.toThrowError();
    });

    it('should be throw when TransactionFinanceService throw', async () => {
      service.findByAccountId = jest
        .fn()
        .mockRejectedValue(new InternalServerErrorException());
      await expect(controller.findByAccountId(998877)).rejects.toThrow();
      expect(service.findByAccountId).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAllTransactions', () => {
    it('should return a transaction list successfully', async () => {
      const result = await controller.findAllTransactions();
      expect(result).toEqual(dtoTransactionList);
      expect(typeof result).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());
      expect(controller.findAllTransactions).rejects.toThrowError();
    });
  });
});
