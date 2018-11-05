const db = require('../models');
const express = require("express");
const path = require('path');


module.exports = function(app) {

app.get('/api/openBugs', function(req, res) {
  db.openBugs.findAll({
    // include: [db.Post]
  }).then(function(rows) {
    res.json(rows);
  }).catch(function(error) {
    console.log("++++++++++++");
    console.log(error);
    res.json({ error: error });
  });
});



// POST route for adding new bugs
app.post('/api/openBugs', function(req, res) {
    db.openBugs.create(req.body).then(function(swattr) {
      res.json(rows);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });



  
  



};