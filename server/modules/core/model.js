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
        async update() {
        },
        async create(data = {}) {
            const mongooseCreate = new Model(data);
            return mongooseCreate.save();
        }
    }
};