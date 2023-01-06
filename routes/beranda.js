// (5) Buat router terns\ak
const express = require("express");
const router = express.Router();
const Beranda = require("../models/Beranda");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const berandaPost = new Beranda({
    judul: req.body.judul,
    deskripsi: req.body.deskripsi,
    urlGambar: req.body.urlGambar,
    urlKonten: req.body.urlKonten,
  });

  try {
    // simpan data
    const beranda = await berandaPost.save();
    // response
    res.json(beranda);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const beranda = await Beranda.find();
    res.json(beranda);
  } catch (error) {
    res.json({ message: error });
  }
});

 
module.exports = router;
