const express = require("express");

const mysql = require("mysql");

const router = express.Router();
const connectionPool = require("../database/connection-pool");
const ProgramRepository = require("../database/program-assign-repository");

let repository = new ProgramRepository(connectionPool);


//Delete a program 
router.delete("/:userid/:id", function (req, res) {
    repository.delete(req.params.userid,req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Get a single program
  router.get("/:userid/:id", function (req, res) {
    repository.get(req.params.userid,req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Update a program
  router.put("/:id", function (req, res) {
    repository.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Save a program
  router.post("/", function (req, res) {
    repository.save(req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Get all the program
  router.get("/", function (req, res, next) {
    repository.getAll((err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });

module.exports = router;
