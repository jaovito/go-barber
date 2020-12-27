import { Router } from 'express';
import UserView from '@modules/users/views/UserView';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

const sessions = Router();

sessions.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticatedUser = new AuthenticateUserService(usersRepository);

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
