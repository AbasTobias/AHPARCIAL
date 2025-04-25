
import fightersRouter from './fightersRouter.js'; 



function routerAPI( app ){
    console.log('Rutas')
    //
    app.use('/api/fighters', fightersRouter);
    // AGREGA CATEGORIAS
    
}

export default routerAPI;
