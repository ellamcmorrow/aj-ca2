const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

// import Mongoose and the User model
const mongoose = require('mongoose');
const Hunter = require('./models/Hunter');
const Advert = require('./models/Advert');
const Tenant = require('./models/Tenant');
const User = require('./models/User');

const server = express();
const dbname = 'MyMongoDB'; // change to match your database name
const port = process.env.PORT || 8000;

// serve files from the dist directory
server.use(express.static('dist'));

// connect to mlabs db hosted on heroku
const mongo_uri = 'mongodb://ella2:iadt2019!@ds135036.mlab.com:35036/heroku_xcd1747x';

let db;

mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
    console.log(err)
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// define the various endpoints - api end points
// retrieve all user objects from DB
server.get('/api/hunters', (req, res) => {
  Hunter.find({}, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/api/hunters/:id', (req, res) => {
  Hunter.findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete user with specific ID from DB
server.delete('/api/hunters', (req, res) => {
  Hunter.deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new user based on info supplied in request body
server.post('/api/hunters', (req, res) => {
  // create a new user object using the Mongoose model and the data sent in the POST
  const hunter = new Hunter(req.body);
  // save this object to the DB
  hunter.save((err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update user based on info supplied in request body
server.put('/api/hunters', (req, res) => {
  // get the ID of the user to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a user matching this ID and update their details
  hunter.updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});
/* ADVERTS */
server.get('/api/adverts', (req, res) => {
  Advert.find({}, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/api/adverts/:id', (req, res) => {
  Advert.findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});
server.get('/api/adverts/:id/tenants', function(req, res) {
  Advert.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    Tenant.find({advert_id: data._id}, function(err, modules) {
      if (err) throw err;

      res.send(modules);
    });
  });
});

// delete user with specific ID from DB
server.delete('/api/adverts', (req, res) => {
  Advert.deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new user based on info supplied in request body
server.post('/api/adverts', (req, res) => {
  // create a new user object using the Mongoose model and the data sent in the POST
  const advert = new Advert(req.body);
  // save this object to the DB
  advert.save((err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update user based on info supplied in request body
server.put('/api/adverts', (req, res) => {
  // get the ID of the user to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a user matching this ID and update their details
  Advert.updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});
// retrieve all user objects from DB
server.get('/api/users', (req, res) => {
  User.find({}, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/api/users/:id', (req, res) => {
  User.findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete user with specific ID from DB
server.delete('/api/users', (req, res) => {
  User.deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new user based on info supplied in request body
server.post('/api/users', (req, res) => {
  // create a new user object using the Mongoose model and the data sent in the POST
  const user = new User(req.body);
  // save this object to the DB
  user.save((err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update user based on info supplied in request body
server.put('/api/users', (req, res) => {
  // get the ID of the user to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a user matching this ID and update their details
  User.updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});

server.listen(port, () => {
    console.log("App is running on port " + port);
});

// server.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
