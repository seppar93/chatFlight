var db = require("../models");

module.exports = function(app) {

    // assuming the database is exported as login
    //This call would just be for us to view all the users so I don't know where we put this specifically but thought I'd throw it in
    app.get("/api/login", function(req, res) {
      db.user.findAll({}).then(function(data){
        console.log(data);
      });
    });

    //creating a new user again assuming database is exported as login
    app.post("/api/login", function(req, res){
        db.user.create({
            username: req.body.username,
            password: req.body.password
        });
    });

    //this is what updates the previous flights table in the database. 
    app.put("/api/previousFlight", function(req, res) {
       
        db.previousFlight.update({
            table: {
                flightNum : req.body.flightNum,
                departure: req.body.departure,
                arrival: req.body.arrival,
                status: req.body.status
            },
          where:{
            id: req.body.id
          }
           }).then(function(data){
          
        });
      });
      //this gets all the user login info to be used for login
      app.get("/api/login", function(req, res) {
        db.user.findAll({
            attributes: ['id'],
            attributes: ['username'],
            attributes: ['password']
        }).then(function(data){
                return [_.map(data, function(data) { return data.id; }),
                    _.map(data, function(data) { return data.username; }),
                    _.map(data, function(data) { return data.password; }),
                    _.map(data, function(data) { return data.table; }),]
              
        });
      });

      //this gets the table data for a specific user to display their previous searches. the resulting function will likely have to be tweaked a bit to fit the front end.
      //this is not complete yet
    //   app.get("/api/login", function(req, res) {
    //     db.user.findAll({
    //         where: {
    //             id = req.body.id
    //         },
    //         attributes: table
    //     }).then(function(data){
    //       res.json(data);
    //     });
      //});
}