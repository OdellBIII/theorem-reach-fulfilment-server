
const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);


app.post("/", (req, res) => {

  console.log(req.body);
  res.sendStatus(200);
});

var server = app.listen(app.get('port'), function() {
  console.log("Listening on port %d", server.address().port);
});
