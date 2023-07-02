import type { RoomId, UserId } from '$/commonTypesWithClient/branded';
import type { UserOnRoomModel } from '$/commonTypesWithClient/models';
import { UserIdParser, roomIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { UserOnRoom } from '@prisma/client';

const toUserOnRoomModel = (prismaUser: UserOnRoom): UserOnRoomModel => ({
  id: UserIdParser.parse(prismaUser.firebaseId),
  in: prismaUser.in.getTime(),
  roomId: roomIdParser.parse(prismaUser.roomId),
});

export const userOnRoomRepository = {
  create: async (userId: UserId, roomId: RoomId) => {
    await prismaClient.userOnRoom.create({
      data: {
        firebaseId: userId,
        roomId,
        in: new Date(),
      },
    });
  },
  delete: async (userId: UserId) => {
    await prismaClient.userOnRoom.deleteMany({
      where: { firebaseId: userId },
    });
    return userId;
  },
  findAllInRoom: async (roomId: RoomId): Promise<UserOnRoomModel[]> => {
    const users = await prismaClient.userOnRoom.findMany({ where: { roomId } });
    return users.map(toUserOnRoomModel);
  },
};
