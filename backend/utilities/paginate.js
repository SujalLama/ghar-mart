const pageSize = require("./constants");

const paginate = (pageNumber) => {
    const offset = (pageNumber - 1) * pageSize;
    return {
        offset,
        limit: pageSize
    }
}

module.exports = paginate;