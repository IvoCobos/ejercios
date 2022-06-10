export default (Model) => {
    return {
        async find(filter = {}){
            const limit = filter.limit;
            delete filter.limit;

            const mongooseInstance = Model.find(filter);
            mongooseInstance.limit(limit);
            return mongooseInstance.exec();
        },
        async update() {
        },
        async create(data = {}){
            const mongooseCreate = new Model(data);
            return mongooseCreate.save();
        }
    }
};