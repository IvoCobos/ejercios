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
      const data = await generic_routes(user_routes).delete({_id: '620ac978d94dfb47a3bc041c'});

      expect(data.response.username).toBe('data1');
      expect(data.response.length).toBe(2);
    });
  });
});
