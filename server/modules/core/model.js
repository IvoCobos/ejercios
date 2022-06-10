export default (Model) => {
    return {
        // find: async (filter) => {
        //     const limit = filter.limit;
        //     delete filter.limit;

        //     const data = await Model.find(filter).limit(limit).lean().exec();
            
        //     return data;
        // },
        // update: async () =>{

        // }
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