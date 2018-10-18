const request = require('supertest');

var app = require('./server').app;

it('should return hello world', (done) => {
  request(app)
      .get('/')
      .expect('Hello worlds')
      .end(done);
})