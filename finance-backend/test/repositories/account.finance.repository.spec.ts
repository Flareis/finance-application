import { Provider } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { AccountMongoRepository } from '../../src/repository/account.finance.repository';
import { DTOFactoryMock } from '../mock/dto-factory.mock';
import { AccountFinance } from '../../src/schemas/account.finance.schema';

describe('AccountMongoRepository', () => {
  const mock = new DTOFactoryMock();
  const mockAccountMongooseModel = (): Provider<
    Pick<Model<AccountFinance>, 'create' | 'find' | 'findOne'>
  > => ({
    provide: getModelToken(AccountFinance.name, 'Accounts'),
    useValue: {
      create: jest.fn().mockReturnValue({
        toObject: jest.fn().mockReturnValue(mock.createAccountFinanceDto()),
      }),
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(mock.createsAccountFinanceDto()),
      }),
      findOne: jest.fn().mockReturnValue({
        exec: jest.fn().mockReturnValue(new AccountFinance()),
      }),
    },
  });
  let repository: AccountMongoRepository;
  let accountFinancenModel: Model<AccountFinance>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AccountMongoRepository, mockAccountMongooseModel()],
    }).compile();

    repository = module.get<AccountMongoRepository>(AccountMongoRepository);
    accountFinancenModel = module.get(
      getModelToken(AccountFinance.name, 'Accounts'),
    );
  });

  it('should call create whit correct param', async () => {
    const account = mock.createAccountFinanceDto();
    await repository.createAccount(account);
    expect(accountFinancenModel.create).toHaveBeenCalled;
  });

  it('shoud be call find with correct params', async () => {
    await repository.findAllAccounts();
    expect(accountFinancenModel.find).toBeCalledTimes(1);
    expect(accountFinancenModel.find).toBeCalledWith({});
  });

  it('shoud be call findOne with correct params', async () => {
    await repository.findByAccountId(998877);
    expect(accountFinancenModel.findOne).toBeCalledTimes(1);
    expect(accountFinancenModel.findOne).toBeCalledWith({ account_id: 998877 });
  });

  it('shoud be call findOne with correct params', async () => {
    await repository.findById('5ca4bbc7a3dd9');
    expect(accountFinancenModel.findOne).toBeCalledTimes(1);
    expect(accountFinancenModel.findOne).toBeCalledWith({
      _id: '5ca4bbc7a3dd9',
    });
  });

  it('shoud be throw when findOne if findOne throws', async () => {
    accountFinancenModel.findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockReturnValue(Promise.reject(new Error())),
    });
    expect(repository.findById('5ca4bbc7a3dd9')).rejects.toThrow(new Error());
  });
});
