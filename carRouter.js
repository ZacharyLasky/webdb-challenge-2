const express = require("express")
const db = require("./data/db-config")
const router = express.Router();

//POST (Create)
router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id")
      .then(carData => {
        res.status(201).json(carData)
      })
      .catch(error => {
        res.status(500).json(error)
      })

})

//GET (Read)
router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
      .then(carInfo => {
        res.status(200).json(carInfo)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

//UPDATE by id
router.put("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .update(req.body)
      .then(entries => {
        res.status(200),json(`Updated ${entries} entries`)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

//DELETE by id
router.delete("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
      .delete()
      .then(entries => {
        res.status(200).json(`Deleted ${entries} entries`)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

module.exports = router;