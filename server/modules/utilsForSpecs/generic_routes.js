export default (routes) => {
  return {
    get: () => {
      return new Promise((resolve) => {
        routes({
          post: jest.fn(),
          put: jest.fn(),
          delete: jest.fn(),
          get: async (path, find) => {
            const res = {
              json: jest.fn()
            };
            await find({}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    },
    post: () => {
      return new Promise((resolve) => {
        routes({
          get: jest.fn(),
          put: jest.fn(),
          delete: jest.fn(),
          post: async (path, create) => {
            const res = {
              json: jest.fn()
            };
            await create({}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    }
  };
};
