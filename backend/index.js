const express = require('express')
var consign = require('consign')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

consign()
  .include('routes')
  .then('db')
  .then('model')
  .then('controller')
  .into(app);

app.listen(3000)