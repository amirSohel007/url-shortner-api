const express = require("express");
const app = express();
const shortUrl = require("node-url-shortener");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8000 ;

app.use(cors());

// parse application/json
app.use(bodyParser.json());



// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res)=> {
    res.json({message:'API is up now'})
})

app.get("/url-shortner", (req, res) => {
  shortUrl.short(req.body.url, function (err, url) {
    if (!err) {
      res.json({ shortUrl: url });
    }
  });
});


app.listen(PORT, () => console.log("Server is up and running"));
