import database from '../../utilsForSpecs/database';
import totals_routes from '../totals_routes.js';

describe('app', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/testing.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
  });

  describe('When find', () => {
    fit('should return data', async () => {
      const data = await totals_routes.find();
      console.log(data);
      
      expect(data.length).toBe(2);
      expect(data[0].route).toBe('Route1');
      expect(data[1].route).toBe('Route2');
    });
  });
});
