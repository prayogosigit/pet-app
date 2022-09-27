const express = require("express");
const pets = require("../controllers/pet.controllers");

const router = express.Router();

// GET route for pets
router.get("/pets", pets.retrieve);

// GET route for pet Breed Search
router.get("/pet/:name", pets.retrieveByName);

// POST route to insert new pets
router.post("/pet", pets.insert);

// PUT route to update pets
router.put("/pet/:id", pets.update);

// DELETE route to delete pets
router.delete("/pet/:id", pets.remove);

module.exports = router;
