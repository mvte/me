const express = require("express");
import sslRedirect from 'heroku-ssl-redirect';
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();

const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "build")));
app.use(sslRedirect());

// This route serves the React app
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => console.log(`Server listening on port ${port}`));