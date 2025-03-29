require("dotenv").config();
const express = require('express');
const app = express();
const router = require("./src/routes/index");

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.get("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Server is up and running on ${process.env.PORT} `)
})