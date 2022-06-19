const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {readdirSync} = require('fs');
require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth')
const app = express();

//db
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true},{})
.then(()=>console.log('DB Connneted'))
.catch(err=>console.log(`DB ERR`,err))

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '1000mb'}));
app.use(cors());
//route middleware auto-load all the routes
readdirSync('./routes').map((r)=>app.use("/api",require("./routes/"+ r))
);

//PORT
const port = process.env.PORT || 8000
app.listen(port,()=>console.log(`Server is running on port ${port}`));