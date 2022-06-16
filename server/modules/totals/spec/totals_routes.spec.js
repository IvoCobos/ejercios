import database from '../../utilsForSpecs/database';
import totals_routes from '../totals_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';


describe('app', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/students.js`,
      `${__dirname}/fixtures/users.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
    jest.clearAllMocks();
  });

  describe('When find', () => {
    it('should return data', async () => {
      const data = await generic_routes(totals_routes);

      expect(data.response.total).toBe(4);
    });
  });
});
