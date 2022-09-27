const { MongoClient } = require("mongodb");

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?maxPoolSize=2-&w=majority`;

const client = new MongoClient(uri);

const init = async () => {
  try {
    await client.connect();
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

const getClient = () => {
  return client;
};

module.exports.init = init;
module.exports.getClient = getClient;
