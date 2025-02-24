const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let users = [];

app.post('/api/users,', function(req, res){}