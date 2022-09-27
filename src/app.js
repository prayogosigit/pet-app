//Import modules
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const petRoutes = require("./routes/pet.routes");
const db = require("./utils/db.util");
const path = require('path');

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.json());
app.use(petRoutes);

(async () => {
  await db.init();

  app.listen(PORT, (err) => {
    console.log(`Server is up at localhost ${PORT}`);
  });
})();
