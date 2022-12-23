// (4) Buat Schema 
const mongoose = require("mongoose");

const TutorSchema = mongoose.Schema({
  // Buat Schema data
  judul: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  urlGambar: {
    type: String,
    required: true,
  },
  urlKonten: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
