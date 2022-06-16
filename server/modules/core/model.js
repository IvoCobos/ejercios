import defaultQuery from './query.js';

export default (Model) => {
  return {
    async find (filter, params = {}) {
      const mongooseInstance = Model.find(filter, null);


      const query = defaultQuery(mongooseInstance);
      query.paginate(params.page, params.perPage);
      query.populate(params.populate);
      query.select(params.select);
      const data = await mongooseInstance.exec();

      return data;
    },
    async findOneAndUpdate (data = {}) {
      const mongooseUpdate = Model.findOneAndUpdate({_id: data._id}, data, {
        new: true
      });

      const result = await mongooseUpdate.exec();

      return result;
    },
    async create (data = {}) {
      const mongooseCreate = new Model(data);

      const result = await mongooseCreate.save();

      return result;
    },
    async findOneAndDelete (data = {}) {
      const mongooseDelete = Model.findOneAndDelete({_id: data._id});

      const result = await mongooseDelete.exec();

      return result;
    }
  };
};
