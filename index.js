const express = require('express');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
const connectDB = require("./config/db");
const routes = require("./routes/api");


// dotenv.config();

const app = express();

//db connection
connectDB();

// middleware
app.use(bodyParser.json());
app.use('/api', routes);


//port number
const PORT = 3006;
app.listen(PORT,()=> console.log(`server is running at ${PORT}`));