import user_routes from '../user_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';

describe('user routes', () => {
  const routes = generic_routes(user_routes);
  it('should return correct path', () => {
    expect(routes.pathRoute).toBe('/users');
  });
  it('should return methods', () => {
    expect(routes.app.get).toHaveBeenCalled();
    expect(routes.app.post).toHaveBeenCalled();
    expect(routes.app.put).toHaveBeenCalled();
    expect(routes.app.delete).toHaveBeenCalled();
  });
});
