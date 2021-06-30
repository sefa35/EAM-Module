const express = require("express");

const mysql = require("mysql");

const router = express.Router();
const connectionPool = require("../database/connection-pool");
const TeacherRepository = require("../database/teacher-repository");

let repository = new TeacherRepository(connectionPool);


//Delete a teacher 
router.delete("/:id", function (req, res) {
    repository.delete(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Get a single teacher
  router.get("/:id", function (req, res) {
    repository.get(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Update a teacher
  router.put("/:id", function (req, res) {
    repository.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Save a teacher
  router.post("/", function (req, res) {
    repository.save(req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.toString() });
      } else {
        res.sendStatus(200);
      }
    });
  });
  
  //Get all the teachers
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
