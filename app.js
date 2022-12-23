// (1) definisikan module, middleware
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); //cors policy
require("dotenv/config");

app.use(cors());

// (6) middleware body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// (7) import routes
const ternakRoutes = require("./routes/ternak");
const storeRoutes = require("./routes/store");
const tutorRoutes = require("./routes/tutor")

// (8) app.use (mendaftarkan middleware baru ke Express)
app.use("/ternak", ternakRoutes);
app.use("/store", storeRoutes);
app.use("/tutor", tutorRoutes)

// (3) koneksi ke database mongodb
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// handle error
db.on("error", console.error.bind(console, "Error Establishing a Database Connection?"));
// handle success
db.once("open", () => {
  console.log("Database is connected");
});

// (2) listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
