import { Router } from 'express';

import AuthenticationUserService from '../services/Sessions/AuthenticationUserService';
// import User from '../models/User';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticationUser = new AuthenticationUserService();

  const { user, token } = await authenticationUser.execute({
    email,
    password,
  });

  // delete user.password;

  return response.json({ user, token });
});

export default sessionsRoutes;
