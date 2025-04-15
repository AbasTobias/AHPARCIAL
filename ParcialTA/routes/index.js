// Importamos cada ruta
import usersRouter from "./usersRouter.js";

function routerAPI( app ){
    console.log('Rutas')
    // Definimos cada
    app.use('/api/users', usersRouter );
    // app.use('/api/products', productsRouter );

}

export default routerAPI;
