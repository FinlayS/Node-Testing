const express = require('express')

var app = express();
var app2 = express();


// app.get('/', (req, res) => {
//   res.status(404).send({
//     error: 'Page not found',
//     name: 'Todo App v1.0'
//   })
// });

app2.get('/users', (req, res) => {
  res.send([{
    name: 'twenty',
    age: 20
  },
    {
      name: 'forty',
      age: 40
    }
  ])
});



//app.listen(3000)
app2.listen(3000)
//module.exports.app = app
module.exports.app2 = app2
