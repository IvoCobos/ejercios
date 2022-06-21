export default (routes) => {
  // eslint-disable-next-line global-require
  const routesMock = jest.spyOn(require('../core/routes.js'), 'default');
  const app = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
  };
  routes(app);
  const pathRoute = routesMock.mock.calls[0][2];

  return {
    app,
    pathRoute,
    get: async (query) => {
      const find = app.get.mock.calls[0][1];
      const res = {
        json: jest.fn()
      };
      await find({query}, res);

      return res.json.mock.calls[0][0];
    },
    post: async (body) => {
      const create = app.post.mock.calls[0][1];
      const res = {
        json: jest.fn()
      };
      await create({body}, res);

      return res.json.mock.calls[0][0];
    },
    put: async (body) => {
      const findOneAndUpdate = app.put.mock.calls[0][1];
      const res = {
        json: jest.fn()
      };
      await findOneAndUpdate({body}, res);

      return res.json.mock.calls[0][0];
    },
    delete: async (body) => {
      const findOneAndDelete = app.delete.mock.calls[0][1];
      const res = {
        json: jest.fn()
      };
      await findOneAndDelete({body}, res);

      return res.json.mock.calls[0][0];
    }
  };
};
