import type { UserId } from '$/commonTypesWithClient/branded';
import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomsRepository } from '$/repository/roomsRepository';
import { roomIdParser } from '$/service/idParsers';
import assert from 'assert';
import { randomUUID } from 'crypto';
import { userColorUsecase } from './userColorUsecase';

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
  clickBoard: async (x: number, y: number, userId: UserId): Promise<RoomModel> => {
    const latest = await roomsRepository.findLatest();

    assert(latest, 'にゃー');

    const newBoard: number[][] = JSON.parse(JSON.stringify(latest.board));
    newBoard[y][x] = userColorUsecase.getUserColor(userId);

    const newRoom: RoomModel = { ...latest, board: newBoard };

    await roomsRepository.save(newRoom);

    return newRoom;
  },
};
