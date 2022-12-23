// (5) Buat router terns\ak
const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const tutorPost = new Tutor({
    judul: req.body.judul,
    deskripsi: req.body.deskripsi,
    urlGambar: req.body.urlGambar,
    urlKonten: req.body.urlKonten,
  });

  try {
    // simpan data
    const tutor = await tutorPost.save();
    // response
    res.json(tutor);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const tutor = await Ternak.find();
    res.json(tutor);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:tutorId", async (req, res) => {
  // tampung input kontent
  const data = {
    judul: req.body.judul,
    deskripsi: req.body.deskripsi,
    urlGambar: req.body.urlGambar,
    urlKonten: req.body.urlKonten,

  };

  try {
    // update data
    const tutor = await Tutor.updateOne({ _id: req.params.tutorId }, data);
    // response
    res.json(tutor);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:tutorId", async (req, res) => {
  try {
    // delete data
    const tutor = await Tutor.deleteOne({ _id: req.params.tutorId });
    // response
    res.json(tutor);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
