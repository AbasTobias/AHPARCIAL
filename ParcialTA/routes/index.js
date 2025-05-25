import cafesRouter from './cafesRouter.js';  
import usersRouter from './usersRouter.js';
function routerAPI(app) {
  console.log('Rutas');
  app.use('/api/cafes', cafesRouter);
  app.use('/api/users',usersRouter);
}

export default routerAPI;
