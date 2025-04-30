import cafesRouter from './cafesRouter.js';  

function routerAPI(app) {
  console.log('Rutas');
  app.use('/api/cafes', cafesRouter);
}

export default routerAPI;
