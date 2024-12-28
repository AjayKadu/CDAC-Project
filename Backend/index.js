const express = require('express');
const config = require('config');
const cors = require('cors');

const app = express();

app.use(express.json());

var port = config.get('port');

const facultRoutes = require("./routes/faculty");

app.listen(port, () => { console.log(`Server Started on port ${port}...`);})

console.log("request comming....")

app.use("/faculty", facultRoutes);