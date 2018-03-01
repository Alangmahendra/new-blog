var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Users',function(){

    it('should add new user on /users/signup POST',function(done){
        chai.request(server)
        .post('/api/user/signup')
        .end(function(err,response){
            response.should.have.status(200)
        })
    })
    // it('should list ALL users on /users GET',function(done){
    //     chai.request(server)
    //         .get('/users')
    //         .end(function(err,res){
    //             res.should.have.status(200)
    //      done()
    //     })
    // })

    // it('should add a user on /users POST',function(done){
    //     chai.request(server)
    //         .post('/users')
    //         .send({'name' : 'siapa','lastName' : 'aja'})
    //         .end(function(err,res){
    //             res.should.have.status(200)
    //             res.should.be.json
    //             res.body.should.be.a('object')
    //             res.body.should.have.property('SUCCESS')
    //             res.body.SUCCESS.should.be.a('object')
    //             res.body.SUCCESS.should.have.property('name')
    //             res.body.SUCCESS.should.have.property('lastName')
    //             res.body.SUCCESS.name.should.equal('siapa')
    //             res.body.SUCCESS.lastName.should.equal('aja')
    //             done()
    //         })
    // })

    // it('should delete a single user on /users/<name> DELETE', function(done){
    //     chai.request(server)
    //     .get('/users/siapa')
    //     .end(function(err,res){
    //         chai.request(server)
    //         .delete('/users/'+res.body.name)
    //         .end(function(error,response){
    //             response.should.have.status(200)
    //             done()
    //         })
    //     })
    // })
})