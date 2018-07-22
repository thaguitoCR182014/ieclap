
//configura la ruta de las vistas
const path=require('path');

const cors=require('cors');
const express=require('express');
const app=express();
const tasks=require('./router/api_users');

//configuracion
app.set('port',process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

/* middlewares*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:false}));



//enrutadores
app.use('/api',tasks);


app.listen(3000,()=>{
console.log('server on porto 3000');
} );