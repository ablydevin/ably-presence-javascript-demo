require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');



const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/src')));


const PORT = 3001;

app.get("/auth", (req, res) => {
  console.log("Successfully connected to the server auth endpoint");

  const randomId = Math.random().toString(16).slice(-8);
  const clientId = req.query.clientId || randomId;

  var header = {
    "typ":"JWT",
    "alg":"HS256",
    "kid": process.env.ABLY_KEY_NAME
  }
  var claims = {
    'x-ably-capability': JSON.stringify({ '*': ['publish', 'subscribe', 'presence'] }),
    'x-ably-clientId': clientId
  }
  const ablyToken = jwt.sign(claims, process.env.ABLY_KEY_SECRET, {
    algorithm: 'HS256',
    header: header,
    expiresIn: '1h'
    });
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ablyToken));
  });

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
