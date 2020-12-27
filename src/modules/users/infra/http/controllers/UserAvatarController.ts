import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserView from '@modules/users/views/UserView';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateUserAvatar = container.resolve(UpdateUserAvatarService);

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      return response.json({
        user: UserView.render(user),
      });
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
