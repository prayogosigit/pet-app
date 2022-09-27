// Define pet Breeds array
const client = require("../utils/db.util").getClient();

const retrieve = async (req, res) => {
  try {
    const collection = client.db("pet").collection("pets");

    let pets = await collection.find({}).toArray();

    res.status(200).send(pets);
  } catch (error) {
    res.sendStatus(500);
  }
};

const retrieveByName = async (req, res) => {
  try {
  } catch (error) {
    res.sendStatus(500);
  }
  const collection = client.db("pet").collection("pets");

  let pet = await collection.findOne({ name: req.params.name });

  if (pet) {
    res.status(200).send(pet);
  } else {
    res.sendStatus(404);
  }
};

const insert = async (req, res) => {
  try {
    let pet = { id: req.body.id, name: req.body.name, breed: req.body.breed };

    const collection = client.db("pet").collection("pets");

    await collection.insertOne(pet);

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const collection = client.db("pet").collection("pets");

    await collection.updateOne(
      { id: req.params.id },
      { $set: { name: req.body.name, breed: req.body.breed } },
      { upsert: true }
    );

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

const remove = async (req, res) => {
  try {
    const collection = client.db("pet").collection("pets");

    await collection.deleteOne({ id: req.params.id });

    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports.retrieve = retrieve;
module.exports.retrieveByName = retrieveByName;
module.exports.insert = insert;
module.exports.update = update;
module.exports.remove = remove;
