/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {
      test('no param or body', done => {
        chai.request(server)
          .post(`/api/threads`)
          .end((err, res) => {
            assert.ok(res.status)
            assert.equal(res.text, 'Page Not Found')
            done()
          })
      })

      test('no body', done => {
        chai.request(server)
          .post(`/api/threads/test`)
          .send({})
          .end((err, res) => {
            assert.ok(res.status)
            assert.property(res.body, 'success', "response must include 'success' property")
            assert.property(res.body, 'error', "response must include 'error' property")
            assert.isFalse(res.body.success)
            assert.equal(res.body.error, 'Text missing')
            done()
          })
      })

      test('successful post with valid body', done => {
        chai.request(server)
          .post(`/api/threads/test`)
          .send({text: 'some text', delete_password: 'password'})
          .end((err, res) => {
            assert.ok(res.status)
            console.log(res.body)
            done()
          })
      })
    });
    
    suite('GET', function() {
      
      test('test get request', done => {
        chai.request(server)
          .get(`/api/threads/test`)
          .end((err, res) => {
            assert.ok(res.status)
            done()
          })
      })
    });
    
    suite('DELETE', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    

  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      
    });
    
    suite('GET', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
  });

});