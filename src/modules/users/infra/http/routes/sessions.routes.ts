import { Router } from 'express';
import { container } from 'tsyringe';
import UserView from '@modules/users/views/UserView';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessions = Router();

sessions.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticatedUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticatedUser.execute({
    email,
    password,
  });

  return response.json({
    user: UserView.render(user),
    token,
  });
});

export default sessions;
