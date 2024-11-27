const express = require('express');
const app = express();

let dotenv = require('dotenv');
dotenv.config({
  path: './env',
});
const { PORT = 9999 } = process.env;



app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// import express from 'express';
// const app = express();
//
// app.listen(8080, () => {
//   console.log(`Server is running on port ${8080}.`);
// });
