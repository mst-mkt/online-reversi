import { roomUseCase } from '$/usecase/roomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body, user }) => ({ status: 200, body: await roomUseCase.join(body, user.id) }),
}));
