// (4) Buat Schema Store untuk halaman Toko
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
  urlFoto: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Store", StoreSchema);
