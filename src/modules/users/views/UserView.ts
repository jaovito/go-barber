import User from '../infra/typeorm/entities/User';

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
      // aqui vc poderá acrescentar futuramente novos campos que serão retornados
    };
  },
};
