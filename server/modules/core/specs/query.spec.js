import {expect, jest} from '@jest/globals';
import defaultQuery from '../query';

describe('When', () => {
  it('Should paginate', () => {
    const mongooseQuery = {
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn()
    };
    const query = defaultQuery(mongooseQuery);
    query.paginate(5, 10);
    expect(mongooseQuery.skip).toHaveBeenCalledWith(40);
    expect(mongooseQuery.limit).toHaveBeenCalledWith(10);
  });
  it('populate', () => {
    const mongooseQuery = {
      populate: jest.fn()
    };
    const query = defaultQuery(mongooseQuery);
    query.populate('user');
    expect(mongooseQuery.populate).toHaveBeenCalledWith('user');
  });
});
