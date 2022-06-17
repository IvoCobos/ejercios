import database from '../../utilsForSpecs/database.js';
import students_routes from '../students_routes.js';
import generic_routes from '../../utilsForSpecs/generic_routes.js';


describe('students', () => {
  beforeEach(async () => {
    await database.clearAndLoad([
      `${__dirname}/fixtures/students.js`
    ]);
  });

  afterEach(async () => {
    await database.close();
    jest.clearAllMocks();
  });

  describe('When find', () => {
    it('should return data', async () => {
      const data = await generic_routes(students_routes).get();

      expect(data.response.length).toBe(3);
      expect(data.response[0].grade).toBe('grade1');
      expect(data.response[0].age).toBe(11);
    });
  });
});
