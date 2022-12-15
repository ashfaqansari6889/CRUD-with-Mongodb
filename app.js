const express = require("express");
const cors = require("cors")
const mainRoute = require('./routes/index.route')

const db = require("./config/db");

const app = express();

app.use(express.json({ extended : true  }));
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use('/', mainRoute);



const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err)
    {
        console.log("server stopped due to error" , err);
    }
    console.log("Server is Up and Running on port "+ port);
});