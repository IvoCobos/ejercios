import database from '../../utilsForSpecs/database';
import totals_routes from '../totals_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';

describe('app', () => {
  const routes = generic_routes(totals_routes);
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/students.js`,
      `${__dirname}/fixtures/users.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
  });
  it('should return correct path', () => {
    expect(routes.pathRoute).toBe('/totals');
  });
  it('should return methods', () => {
    expect(routes.app.get).toHaveBeenCalled();
    expect(routes.app.post).not.toHaveBeenCalled();
    expect(routes.app.put).not.toHaveBeenCalled();
    expect(routes.app.delete).not.toHaveBeenCalled();
  });

  describe('When find', () => {
    it('should return data', async () => {
      const data = await generic_routes(totals_routes).get();

      expect(data.response.total).toBe(5);
    });
    it('should return total students', async () => {
      const data = await generic_routes(totals_routes).get({
        students: true
      });

      expect(data.response.total).toBe(2);
    });
    it('should return total users', async () => {
      const data = await generic_routes(totals_routes).get({
        users: true
      });

      expect(data.response.total).toBe(3);
    });
  });
});
