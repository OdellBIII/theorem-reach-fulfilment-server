
const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);


app.get("/", (req, res) => {

  console.log("Webhook recognized")
  console.log(req.params);
  res.sendStatus(200);
});

var server = app.listen(app.get('port'), function() {
  console.log("Listening on port %d", server.address().port);
});
