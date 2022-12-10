// (5) Buat router Mahasiswa
const express = require("express");
const router = express.Router();
const Ternak = require("../models/Ternak");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const ternakPost = new Ternak({
    nama: req.body.nama,
    alamat: req.body.alamat,
  });

  try {
    // simpan data
    const ternak = await ternakPost.save();
    // response
    res.json(ternak);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const ternak = await Ternak.find();
    res.json(ternak);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:ternakId", async (req, res) => {
  // tampung input mahasiswa
  const data = {
    nama: req.body.nama,
    alamat: req.body.alamat,
  };

  try {
    // update data
    const ternak = await Ternak.updateOne({ _id: req.params.ternakId }, data);
    // response
    res.json(ternak);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:ternakId", async (req, res) => {
  try {
    // delete data
    const ternak = await Ternak.deleteOne({ _id: req.params.ternakId });
    // response
    res.json(ternak);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
