
const firebaseConfig = {
  apiKey: "AIzaSyDhQObZf4mIW6HlLsnOdSyVWIRMipUSkeg",
  authDomain: "sparechange-80a62.firebaseapp.com",
  databaseURL: "https://sparechange-80a62.firebaseio.com",
  projectId: "sparechange-80a62",
  storageBucket: "sparechange-80a62.appspot.com",
  messagingSenderId: "506295831986",
  appId: "1:506295831986:web:47d707b07de7bd5689a8ab",
  measurementId: "G-LB8GHE413R"
};
const firebase = require('firebase/app');
require('firebase/database')
firebase.initializaeApp(firebaseConfig);

var database = firebase.database();
const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);


app.get("/", (req, res) => {

  console.log("Webhook recognized");
  console.log(req.query);
  var user = req.query;
  database.ref('users/' + user.user_id).set({
    tokens : query.reward,
  });


  res.sendStatus(200);
});

var server = app.listen(app.get('port'), function() {
  console.log("Listening on port %d", server.address().port);
});
