import type { RoomId, UserId } from '$/commonTypesWithClient/branded';
import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomsRepository } from '$/repository/roomsRepository';
import { userOnRoomRepository } from '$/repository/userOnRoomRepository';
import { roomIdParser } from '$/service/idParsers';
import assert from 'assert';
import { randomUUID } from 'crypto';

const initBoard = () => [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, -1, 0, 0, 0],
  [0, 0, 0, 1, 2, -1, 0, 0],
  [0, 0, -1, 2, 1, 0, 0, 0],
  [0, 0, 0, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const roomUseCase = {
  create: async (roomName: string) => {
    const newRoom: RoomModel = {
      id: roomIdParser.parse(randomUUID()),
      name: roomName,
      board: initBoard(),
      status: 'waiting',
      created: Date.now(),
    };

    await roomsRepository.save(newRoom);

    return newRoom;
  },
  join: async (roomId: RoomId, userId: UserId) => {
    const room = await roomsRepository.findUnique(roomId);
    assert(room, 'nya-');

    await userOnRoomRepository.create(userId, roomId);

    const userCount = (await userOnRoomRepository.findAllInRoom(roomId)).length;

    if (userCount > 1) {
      await roomsRepository.save({
        ...room,
        status: 'playing',
      });
    } else {
      await roomsRepository.save({
        ...room,
        status: 'waiting',
      });
    }

    return room;
  },
  leave: async (roomId: RoomId, userId: UserId) => {
    const room = await roomsRepository.findUnique(roomId);
    assert(room, 'nya-');

    await userOnRoomRepository.delete(userId);

    const userCount = (await userOnRoomRepository.findAllInRoom(roomId)).length;

    if (userCount > 1) {
      await roomsRepository.save({
        ...room,
        status: 'playing',
      });
    } else {
      await roomsRepository.save({
        ...room,
        status: 'waiting',
      });
    }

    return room;
  },
};
