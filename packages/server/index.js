const config = require("config");
const mongoose = require("mongoose");
const signup = require("./routes/signup");
const login= require("./routes/login");
const express = require("express");
const app = express();

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: jwtPrivateKey is not defined.");
//   process.exit(1);
// }

mongoose.connect('mongodb://localhost/vitasoft')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use("/login", login);
app.use("/signup", signup);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));