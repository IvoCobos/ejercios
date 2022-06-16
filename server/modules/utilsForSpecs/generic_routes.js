export default (routes) => {
  return new Promise((resolve) => {
    routes({
      get: async (path, find) => {
        const res = {
          json: jest.fn()
        };
        await find({}, res);
        resolve(res.json.mock.calls[0][0]);
      }
    });
  });
};
