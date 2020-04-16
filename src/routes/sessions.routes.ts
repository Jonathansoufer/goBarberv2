import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSessionService = new CreateSessionService();

  const { user, token } = await createSessionService.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRoutes;
