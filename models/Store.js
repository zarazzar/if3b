// (4) Buat Schema Mahasiswa
const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  // Buat Schema data
  namaBarang: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  nomorHP: {
    type: String,
    required: true,
  },
  urlLokasi: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Store", StoreSchema);
