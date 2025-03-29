require("dotenv").config();
const express = require('express');
const app = express();
const routes = require("./src/routes/index");

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is up and running on ${process.env.PORT} `)
})