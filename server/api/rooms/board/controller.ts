import { roomUseCase } from '$/usecase/roomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body, user }) => ({
    status: 201,
    body: await roomUseCase.clickBoard(body.x, body.y, user.id),
  }),
}));
