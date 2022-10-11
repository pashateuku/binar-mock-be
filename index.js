// import express
const express = require("express");
const app = express();

// port config
const port = 4000;

// import routing
const router = require("./router/indexRouter");

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}, url: http://localhost:${port}`));