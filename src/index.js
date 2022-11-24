const express = require('express');
const morgan = require('morgan')
const path = require("path");
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares for dev testing
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/documents'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server listener
app.listen(app.get('port'), ()=>{
    console.log("Server on port: ", app.get('port'));
})
