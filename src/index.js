const express =require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port',3000);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Routes

//app.use(require('./routes'));
app.use('/api/movies',require('./routes/movies'));

//Starting server
app.listen(app.get('port'),() =>{
console.log("Server on Port "+app.get('port'));
});