const mongo = require("mongoose");

// Get MongoURI
const db = require("../config/keys").MongoURI;

mongo
  .connect(db, { useNewUrlParser: true })
  .then(console.log(`MongoDB Connected!`))
  .catch(err => console.log(`MongoDB Error: ${err}`));
