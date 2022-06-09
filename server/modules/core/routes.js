export default (app, model, path) => {
    const find = async (req, res) => {
        const response = await model.find(req.query);

        res.json({ response: response, errors: [] });
    }
    const setup = (operations = {}) => {
        if (operations.get) {
            app.get(path, find);
        }
    }
    return {
        setup
    };
}