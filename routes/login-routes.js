// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================


// Routes
// =============================================================
var db = require("../models");
module.exports = function(app) {

  app.get('/', function(req,res){
    res.sendFile('./src');
  })
  
  // GET route for getting all of the todos
  app.get("/login", function(req, res) {
    res.sendFile('./public/login.html');
  });

  // POST route for saving a new user. We can create a todo using the data on req.body
  app.post("/api/login", function(req, res) {
  db.user.create ({
    username : req.body.username,
    password : req.body.password,
    complete : req.body.complete
  }).then(()=>{
    res.redirect("/")
  })
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("delete/user/:id/:username", function(req, res) {
    db.user.destroy({
      where : {
        id : req.params.id,
        username : req.params.username
      }
    })
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/update/user/:id", function(req, res) {
    db.user.update({
      password: req.body.password,
      complete: req.body.complete
  },{ 
    where : {
      id : req.params.id
  }
  }).then (() => {

    res.redirect('/')
    
  })
}
  );
};
