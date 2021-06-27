const express = require("express");

const mysql = require("mysql");

const router = express.Router();
const connectionPool = require("../database/connection-pool");
const UserRepository = require("../database/user-repository");

let repository = new UserRepository(connectionPool);


//Delete a user 
router.delete("/:id", function (req, res) {
    repository.delete(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Get a single user
  router.get("/:id", function (req, res) {
    repository.get(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Update a user
  router.put("/:id", function (req, res) {
    repository.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Save a user
  router.post("/", function (req, res) {
    repository.save(req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Get all the users
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
