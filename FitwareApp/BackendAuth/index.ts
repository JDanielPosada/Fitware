import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json());

// Configurar cors
server.app.use( cors({ origin: true, credentials: true}) );

// Rutas de mi aplicacion 
server.app.use( '/user', userRoutes)

// conectar DB
mongoose.connect('mongodb://localhost:27017/fitware',
                {useNewUrlParser: true, useCreateIndex: true}, (err) => {

    if( err ) throw err;

    console.log('Base de datos online');
})


server.start( () =>{
    console.log(`Servidor corriendo en puerto ${server.port}`);
})