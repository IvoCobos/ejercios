export default (Model) => {
    return {
        find: async (filter) => {
            const data = await Model.find(filter).lean().exec();

            return data;
        },
        update: async () =>{

        }
    }
};