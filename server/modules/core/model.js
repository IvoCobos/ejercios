export default (Model) => {
    return {
        async find(filter = {}){
            const limit = filter.limit;
            delete filter.limit;

            const mongooseInstance = Model.find(filter).limit(limit);
            return mongooseInstance.exec();
        },
        async update() {

        }
    }
};