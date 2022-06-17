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
    },
    put: () => {
      return new Promise((resolve) => {
        routes({
          put: async (path, findOneAndUpdate) => {
            const res = {
              json: jest.fn()
            };
            await findOneAndUpdate({}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    },
    delete: () => {
      return new Promise((resolve) => {
        routes({
          get: jest.fn(),
          post: jest.fn(),
          put: jest.fn(),
          delete: async (path, findOneAndDelete) => {
            const res = {
              json: jest.fn()
            };
            await findOneAndDelete({}, res);
            resolve(res.json.mock.calls[0][0]);
          }
        });
      });
    }
  };
};
