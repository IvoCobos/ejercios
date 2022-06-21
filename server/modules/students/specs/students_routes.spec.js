import students_routes from '../students_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';

describe('students routes', () => {
  const routes = generic_routes(students_routes);
  it('should return correct path', () => {
    expect(routes.pathRoute).toBe('/students');
  });
  it('should return methods', () => {
    expect(routes.app.get).toHaveBeenCalled();
    expect(routes.app.post).toHaveBeenCalled();
    expect(routes.app.put).toHaveBeenCalled();
    expect(routes.app.delete).toHaveBeenCalled();
  });
});
