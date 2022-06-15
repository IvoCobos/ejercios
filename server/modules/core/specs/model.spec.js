import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import database from '../../utilsForSpecs/database.js';
import testingModel from './mocks/testingModel.js';

describe('Model', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/testing.js`
    ]);
  });

  afterEach(() => database.close());

  describe('When find', () => {
    fit('should return all data', async () => {
      const data = await testingModel.find();

      expect(data.length).toBe(3);
      expect(data[0].name).toBe('data1');
      expect(data[1].name).toBe('data2');
    });

    fit('should return paginate data', async () => {
      const data = await testingModel.find({}, {page: 2, perPage: 2});

      expect(data.length).toBe(1);
      expect(data[0].name).toBe('data3');
    });
  });
});
