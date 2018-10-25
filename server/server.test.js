const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;



it('should return hello world', (done) => {
  request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
        name: 'Todo App v1.0'
        })
      })
      .end(done);
})

it('should return my user object', (done) => {
  request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
            name:  'twenty',
            age: 20
        })
      })
      .end(done);
})