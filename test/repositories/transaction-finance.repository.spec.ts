import { Provider } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TransactionMongoRepository } from '../../src/repository/transaction-finance.repository';
import { DTOFactoryMock } from '../../test/mock/dto-factory.mock';
import { TransactionFinance } from '../../src/schemas/transaction-finance.schema';

describe('TransactionMongoRepository', () => {
  const mock = new DTOFactoryMock();
  const mockTransactionMongooseModel = (): Provider<
    Pick<Model<TransactionFinance>, 'create' | 'find' | 'findOne'>
  > => ({
    provide: getModelToken(TransactionFinance.name, 'Transactions'),
    useValue: {
      create: jest.fn().mockReturnValue({
        toObject: jest.fn().mockReturnValue(mock.createTransactionFinanceDto()),
      }),
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(mock.createTransactionFinanceDto()),
      }),
      findOne: jest.fn().mockReturnValue({
        exec: jest.fn().mockReturnValue(new TransactionFinance()),
      }),
    },
  });
  let repository: TransactionMongoRepository;
  let TransactionFinancenModel: Model<TransactionFinance>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionMongoRepository, mockTransactionMongooseModel()],
    }).compile();

    repository = module.get<TransactionMongoRepository>(
      TransactionMongoRepository,
    );
    TransactionFinancenModel = module.get(
      getModelToken(TransactionFinance.name, 'Transactions'),
    );
  });

  it('should call create whit correct param', async () => {
    const transaction = mock.createTransactionFinanceDto();
    await repository.createTransaction(transaction);
    expect(TransactionFinancenModel.create).toHaveBeenCalled;
  });

  it('shoud be call find with correct params', async () => {
    await repository.findAllTransactions();
    expect(TransactionFinancenModel.find).toBeCalledTimes(1);
    expect(TransactionFinancenModel.find).toBeCalledWith({});
  });

  it('shoud be call findOne with correct params', async () => {
    await repository.findByAccountId(998877);
    expect(TransactionFinancenModel.findOne).toBeCalledTimes(1);
    expect(TransactionFinancenModel.findOne).toBeCalledWith({
      account_id: 998877,
    });
  });

  it('shoud be call findOne with correct params', async () => {
    await repository.findById('5ca4bbc7a3dd9');
    expect(TransactionFinancenModel.findOne).toBeCalledTimes(1);
    expect(TransactionFinancenModel.findOne).toBeCalledWith({
      _id: '5ca4bbc7a3dd9',
    });
  });

  it('shoud be throw when findOne if findOne throws', async () => {
    TransactionFinancenModel.findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockReturnValue(Promise.reject(new Error())),
    });
    expect(repository.findById('5ca4bbc7a3dd9')).rejects.toThrow(new Error());
  });
});
