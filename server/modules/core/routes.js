const parser = (query) => {
  const params = {};
  const filter = {};
  const queryKey = Object.keys(query);

  queryKey.forEach((key) => {
    if (key.indexOf('__') === 0) {
      params[key.slice(2)] = query[key];
    } else {
      filter[key] = query[key];
    }
  });

  return {params, filter};
};

export default (app, model, path) => {
  const find = async (req, res) => {
    const {filter, params} = parser(req.query);
    const response = await model.find(filter, params);

    res.json({response: response, errors: []});
  };
  const create = async (req, res) => {
    const response = await model.create(req.body);

    res.json({response: response, errors: []});
  };
  const findOneAndUpdate = async (req, res) => {
    const response = await model.findOneAndUpdate(req.body);

    res.json({response: response, errors: []});
  };
  const findOneAndDelete = async (req, res) => {
    const response = await model.findOneAndDelete(req.body);

    res.json({response: response, errors: []});
  };
  const setup = (operations = {}) => {
    if (operations.get) {
      app.get(path, find);
    }
    if (operations.post) {
      app.post(path, create);
    }
    if (operations.put) {
      app.put(path, findOneAndUpdate);
    }
    if (operations.delete) {
      app.delete(path, findOneAndDelete);
    }
  };

  return {
    setup
  };
};
