import { roomsRepository } from '$/repository/roomsRepository';
import { roomUseCase } from '$/usecase/roomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await roomsRepository.findAll() }),
  post: async ({ body }) => ({ status: 201, body: await roomUseCase.create(body.roomName) }),
}));
