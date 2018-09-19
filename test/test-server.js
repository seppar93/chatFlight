var chai = require ('chai');
var chaihttp = require('chai-http');
require('./routes/routes')
require ('../models');
var should = chai.should();

chai.use(chaihttp)

it ('should list all previous flights', function(done){
    chai.request(server)
    .get('/previousFlight')
    .end(function(err,res){
            res.should.have.status(200)
            done()
    });
});



