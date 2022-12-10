// (4) Buat Schema Mahasiswa
const mongoose = require("mongoose");

const TernakSchema = mongoose.Schema({
  // Buat Schema data
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ternak", TernakSchema);
