import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

// em rotas que é necessário autenticação da pra fazer:
// routes.use('/nome_rota', ensureAuthenticated, nome_importacao);

export default routes;
