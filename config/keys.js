// This file is where we store our mongoDB URI and where we set our password for MongoDB Atlas

module.exports = {
  MongoURI: `mongodb+srv://teamhris:${process.env.DB_PASS}@cluster0-dq0mk.mongodb.net/test?retryWrites=true&w=majority`
};
