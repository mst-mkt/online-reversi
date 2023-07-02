import { userOnRoomRepository } from '$/repository/userOnRoomRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await userOnRoomRepository.findAllInRoom(query.roomId),
  }),
}));
