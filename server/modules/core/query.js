export default (mongooseQuery) => {
  return {
    paginate: (page, perPage) => {
      if (page && perPage) {
        const skip = (page - 1) * perPage;

        mongooseQuery.skip(skip).limit(perPage);
      }
    },
    populate: (fields) => {
      if (fields) {
        mongooseQuery.populate(fields);
      }
    },
    select: (fields) => {
      if (fields) {
        mongooseQuery.select(fields);
      }
    }
  };
};
