export default (app, model, path) => {
  const find = async (req, res) => {
    const params = {
      page: req.query.__page,
      perPage: req.query.__perPage
    };
    const filter = {};
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
