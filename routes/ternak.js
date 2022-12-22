// (5) Buat router terns\ak
const express = require("express");
const router = express.Router();
const Ternak = require("../models/Ternak");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const ternakPost = new Ternak({
    nama: req.body.nama,
    judul: req.body.judul,
    konten: req.body.konten,
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

router.get("/:ternakId", async (req, res) => {
  try {
    const ternak = await Ternak.findOne({
      _id:req.params.ternakId
    });
    res.json(ternak);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:ternakId", async (req, res) => {
  // tampung input kontent
  const data = {
    nama: req.body.nama,
    judul: req.body.judul,
    konten: req.body.konten,
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
