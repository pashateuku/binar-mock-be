// import express
const express = require("express");
const app = express();
// import dotenv
require('dotenv').config();

// import and initiate cors 
const cors = require('cors');
app.use(cors());

// port config
const port = process.env.PORT;

// import routing
const router = require("./server/router/indexRouter");

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}, url: http://localhost:${port}`));