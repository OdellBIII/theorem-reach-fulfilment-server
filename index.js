
const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
})

app.post("/hook", (req, res) => {

  console.log(req.body);
  res.status(200).end();
});

var server = app.listen(app.get('port'), function() {
  console.log("Listening on port %d", server.address().port);
});
