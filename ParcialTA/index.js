import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js';  
import routerAPI from './routes/index.js';

const port = process.env.PORT;
const app = express();

// Conector a mongoDB >:(  
connectDB();

// middleware
app.use(express.json());

app.get('/', (request, response) => {
    console.log('Ruta Raíz');
    response.send('Home');
});


routerAPI(app);

app.listen(port, () => {
    console.log(chalk.green(`Servidor Web en el puerto ${port}`));
});
