import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();
import routerAPI from "./routes/index.js"

// middleware
app.use(express.json());

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

// Llamamos a nuestras rutas 
routerAPI(app);

app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`) );    
})


