import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserView from '@modules/users/views/UserView';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }
}
