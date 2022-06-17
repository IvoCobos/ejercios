import database from '../../utilsForSpecs/database.js';
import user_routes from '../user_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';


describe('users', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/users.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
    jest.clearAllMocks();
  });

  describe('When find', () => {
    it('should return data', async () => {
      const data = await generic_routes(user_routes).get();

      expect(data.response.length).toBe(3);
      expect(data.response[0].username).toBe('data1');
      expect(data.response[0].email).toBe('data1@hotmail.com');
    });
  });
  describe('When delete', () => {
    it('should delete data', async () => {
      await generic_routes(user_routes).delete({
        _id: '620ac978d94dfb47a3bc041c'
      });
      const remove = await generic_routes(user_routes).get({
        _id: '620ac978d94dfb47a3bc041c'
      });

      expect(remove.response.length).toBe(0);
    });
  });
  describe('When Create', () => {
    it('shloud create data', async () => {
      await generic_routes(user_routes).post({
        username: 'data4',
        email: 'data4@gmail.com'
      });
      const data = await generic_routes(user_routes).get({username: 'data4'});

      expect(data.response.length).toBe(1);
    });
  });
  describe('When update', () => {
    it('should update data', async () => {
      await generic_routes(user_routes).put({
        _id: '620ac978d94dfb47a3bc041c',
        username: 'data8'
      });
      const data = await generic_routes(user_routes).get({
        _id: '620ac978d94dfb47a3bc041c'
      });
      expect(data.response[0].username).toBe('data8');
    });
  });
});
