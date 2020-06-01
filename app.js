const express = require("express");
const app = express();
const shortUrl = require("node-url-shortener");
const bodyParser = require("body-parser");
const cors = require("cors");

// parse application/json
app.use(bodyParser.json());

app.use(cors());

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

const PORT = 8000 || process.env.PORT;
app.listen(8000, () => console.log("Server is up and running"));
