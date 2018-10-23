const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
var app2 = require('./server').app2;


// it('should return hello world', (done) => {
//   request(app)
//       .get('/')
//       .expect(404)
//       .expect((res) => {
//       expect(res.body).toInclude({
//         name: 'Todo App v1.0'
//       })
//
//       })
//       .end(done);
// })

it('should return array', (done) => {
  request(app2)
      .get('/users')
      //.expect(404)
      .expect((res) => {

        expect(res.body).toContain({name:  'twenty', age: 20} )

      })
      .end(done);
})