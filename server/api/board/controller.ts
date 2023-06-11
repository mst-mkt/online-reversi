import { boardRepository } from '$/repository/boardRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: ({ user }) => ({ status: 200, body: boardRepository.getBoard(user.id) }),
  post: ({ body, user }) => ({
    status: 201,
    body: boardRepository.clickBoard(body, user.id),
  }),
}));
