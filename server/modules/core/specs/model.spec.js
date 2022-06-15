import {afterEach, beforeEach, describe, expect, fit, it} from '@jest/globals';
import database from '../../utilsForSpecs/database.js';
import testingModel from './mocks/testingModel.js';
import './mocks/testProfileModel.js';

describe('Model', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/testing.js`,
      `${__dirname}/fixtures/testProfileCollections.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
  });

  describe('When find', () => {
    it('should return all data', async () => {
      const data = await testingModel.find();

      expect(data.length).toBe(3);
      expect(data[0].name).toBe('data1');
      expect(data[1].name).toBe('data2');
    });

    it('should return paginate data', async () => {
      const data = await testingModel.find({}, {page: 2, perPage: 2});

      expect(data.length).toBe(1);
      expect(data[0].name).toBe('data3');
    });

    it('should returned populate data', async () => {
      const data = await testingModel.find({}, {populate: 'profile'});

      expect(data[1].profile.profile).toBe('user');
      expect(data[0].profile.profile).toBe('admin');
    });

    fit('should return select data', async () => {
      const data = await testingModel.find({}, {select: '-name'});

      expect(data[0].name).toBe();
    });
  });

  describe('when create', () => {
    it('Should create data', async () => {
      const data = await testingModel.create({name: 'NewUser2'});
      const create = await testingModel.find({_id: data._id});
      
      expect(data.name).toBe('NewUser2');
      expect(create[0].name).toBe('NewUser2');
    });
  });

  describe('when delete', () => {
    it('should delete data', async () => {
      const data = await testingModel.findOneAndDelete({_id: '620ac978d94dfb47a3bc041c'});
      const remove = await testingModel.find({_id: data._id});

      expect(data.name).toBe('data1');
      expect(remove.length).toBe(0);
    });
  });

  describe('when update', () => {
    it('shuold update data', async () => {
      await testingModel.findOneAndUpdate({
        _id: '620ac978d94dfb47a3bc042c', 
        name: 'RewnewUser'
      });
      const renew = await testingModel.find({
        _id: '620ac978d94dfb47a3bc042c'
      });

      expect(renew[0].name).toBe('RewnewUser');
    });
  });
});
