import { Test, TestingModule } from '@nestjs/testing';
import { SymbolEnum } from '../../src/schemas/interfaces/enums/symbol.enum';
import { TransactionFinance } from '../../src/schemas/transaction-finance.schema';
import { CreateTransactionFinanceDto } from '../../src/dto/create-transaction-finance.dto';
import { TransactionFinanceService } from '../../src/services/transaction-finance.service';
import { TransactionCodeEnum } from '../../src/schemas/interfaces/enums/transaction-code.enum';
import { TransactionFinanceController } from '../../src/controllers/transaction-finance.controller';
import { InternalServerErrorException } from '@nestjs/common';

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
});
