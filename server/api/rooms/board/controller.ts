import { boardUsecase } from '$/usecase/boardUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await boardUsecase.getBoard() }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await boardUsecase.clickBoard(body.x, body.y, user.id),
  }),
}));
