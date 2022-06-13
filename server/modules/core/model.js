export default (Model) => {
    return {
        async find(filter = {}) {
            const page = filter.page;
            delete filter.page;

            const limit = filter.limit;
            delete filter.limit;

            const mongooseInstance = Model.find(filter);
            mongooseInstance.limit(limit);
            if (page) {
                mongooseInstance.skip(page > 0 ? ((page - 1) * 10) : 0).limit(10);
            }
            return mongooseInstance.exec();
        },
        async findOneAndUpdate(data = {}) {
            const mongooseUpdate = Model.findOneAndUpdate({_id: data._id}, data, {
                new: true
            });
            return mongooseUpdate.exec();
        },
        async create(data = {}) {
            const mongooseCreate = new Model(data);
            return mongooseCreate.save();
        },
        async findOneAndDelete(data = {}){
            const mongooseDelete = Model.findOneAndDelete(data);
            return mongooseDelete.exec();
        }
    }
};