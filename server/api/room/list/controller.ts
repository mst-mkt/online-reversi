import { roomsRepository } from '$/repository/roomsRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await roomsRepository.findAll() }),
}));
