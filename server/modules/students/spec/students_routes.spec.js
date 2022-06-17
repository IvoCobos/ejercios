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
  describe('When create', () => {
    it('should create data', async () => {
      await generic_routes(students_routes).post({
        grade: 'grade4',
        age: 14
      });
      const data = await generic_routes(students_routes).get({grade: 'grade4'});
      expect(data.response.length).toBe(1);
    });
  });
  describe('When update', () => {
    it('shloud update data', async () => {
      await generic_routes(students_routes).put({
        _id: '620ac978d94dfb47a3bc042c',
        grade: 'grade5'
      });
      const data = await generic_routes(students_routes).get({
        _id: '620ac978d94dfb47a3bc042c'
      });
      expect(data.response[0].grade).toBe('grade5');
    });
  });
  describe('When delete', () => {
    it('Shloud delete data', async () => {
      await generic_routes(students_routes).delete({
        _id: '620ac978d94dfb47a3bc042c'
      });
      const data = await generic_routes(students_routes).get({
        _id: '620ac978d94dfb47a3bc042c'
      });
      expect(data.response.length).toBe(0);
    });
  });
});
