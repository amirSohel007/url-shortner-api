const express = require("express");
const app = express();
const shortUrl = require("node-url-shortener");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8000 ;
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


app.listen(PORT, () => console.log("Server is up and running"));
