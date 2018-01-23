const express  = require('express');
const path     = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pearls');
let db = mongoose.connection;

//Check db connection
db.once('open', function(){
  console.log('Connceted to MongoDb.');
});

//check for db errors
db.on('error', function(err){
  console.log(err);
});

//Init app
const app = express();

//Bring in models
let Pearls = require('./models/pearls')

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', function(req, res){
  let Pearls = [
    {
      id:1,
      date: "Jan 22",
      pearl: "asdfasdfadsfsdf"
    },
    {
      id:2,
      date: "Jan 23",
      pearl: "asdfasdfasdfsdf"
    },
    {
      id:3,
      date: "Jan 24",
      pearl: "rewrerwerwerwerwe"
    }
  ];
});
  // Pearls.find({}, function(err, pearl){
  //   if(err){
  //     console.log(err);
  //   }else {
  //   res.render('index', {
  //     title : 'Pearls',
  //     'Pearls' : 'pearl'
  //     });

//  });
// });

//Add routes
app.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
}),
app.get('/admin', function(req, res){
  res.render('admin', {
    title: 'Administration Page'
  });
}),
app.get('/userPearls', function(req, res){
  res.render('userPearls', {
    title: 'User Pearls'
  });
}),
app.get('/terms', function(req, res){
  res.render('terms', {
    title: 'Terms'
  });
}),

//Start server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
})
