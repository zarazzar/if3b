// (5) Buat router store
const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const storePost = new Store({
    namaBarang: req.body.namaBarang,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
    nomorHP: req.body.nomorHP,
    urlLokasi: req.body.urlLokasi,
  });

  try {
    // simpan data
    const store = await storePost.save();
    // response
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const store = await Store.find();
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:storeId", async (req, res) => {
  // tampung input kontent
  const data = {
    namaBarang: req.body.namaBarang,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
    nomorHP: req.body.nomorHP,
    urlLokasi: req.body.urlLokasi,
  };

  try {
    // update data
    const store = await Store.updateOne({ _id: req.params.storeId }, data);
    // response
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:storeId", async (req, res) => {
  try {
    // delete data
    const store = await Store.deleteOne({ _id: req.params.storeId });
    // response
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
