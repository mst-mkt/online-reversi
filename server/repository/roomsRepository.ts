import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';
import { z } from 'zod';

const toRoomModel = (prismaRoom: Room): RoomModel => ({
  id: roomIdParser.parse(prismaRoom.roomId),
  name: prismaRoom.roomName,
  board: z.array(z.array(z.number())).parse(prismaRoom.board),
  status: z.enum(['waiting', 'playing', 'ended']).parse(prismaRoom.status),
  created: prismaRoom.createdAt.getTime(),
});

export const roomsRepository = {
  save: async (room: RoomModel) => {
    await prismaClient.room.upsert({
      where: { roomId: room.id },
      update: { status: room.status, board: room.board },
      create: {
        roomId: room.id,
        roomName: room.name,
        status: room.status,
        board: room.board,
        currentTurnColor: 1,
        createdAt: new Date(room.created),
      },
    });
  },
  findUnique: async (roomId: string): Promise<RoomModel | null> => {
    const room = await prismaClient.room.findUnique({
      where: { roomId },
    });

    return room && toRoomModel(room);
  },
  findAll: async (): Promise<RoomModel[]> => {
    const rooms = await prismaClient.room.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return rooms.map(toRoomModel);
  },
};
