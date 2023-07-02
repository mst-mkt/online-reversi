import { roomsRepository } from '$/repository/roomsRepository';
import { roomUseCase } from '$/usecase/roomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await roomsRepository.findUnique(query?.roomId),
  }),
  post: async ({ body }) => ({ status: 201, body: await roomUseCase.create(body.roomName) }),
}));
