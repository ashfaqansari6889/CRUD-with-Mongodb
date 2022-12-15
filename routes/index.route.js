const express = require("express");
const app = express();

const crudRoute = require("./crud.route")
const userRoute = require('./user.route')



app.use('/crud', crudRoute);
app.use('/user', userRoute);

module.exports = app;