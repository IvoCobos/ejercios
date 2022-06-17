export default (routes) => {
  return {
    get: (query) => {
      return new Promise((resolve) => {
        routes({
          post: jest.fn(),
          put: jest.fn(),
          delete: jest.fn(),
          get: async (path, find) => {
            const res = {
              json: jest.fn()
            };
            await find({query}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    },
    post: (body) => {
      return new Promise((resolve) => {
        routes({
          get: jest.fn(),
          put: jest.fn(),
          delete: jest.fn(),
          post: async (path, create) => {
            const res = {
              json: jest.fn()
            };
            await create({body}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    },
    put: (body) => {
      return new Promise((resolve) => {
        routes({
          post: jest.fn(),
          delete: jest.fn(),
          get: jest.fn(),
          put: async (path, findOneAndUpdate) => {
            const res = {
              json: jest.fn()
            };
            await findOneAndUpdate({body}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    },
    delete: (body) => {
      return new Promise((resolve) => {
        routes({
          get: jest.fn(),
          post: jest.fn(),
          put: jest.fn(),
          delete: async (path, findOneAndDelete) => {
            const res = {
              json: jest.fn()
            };
            await findOneAndDelete({body}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    }
  };
};
