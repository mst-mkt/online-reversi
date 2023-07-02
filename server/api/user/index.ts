import type { RoomId } from '$/commonTypesWithClient/branded';
import type { UserOnRoomModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    query: {
      roomId: RoomId;
    };
    resBody: UserOnRoomModel[];
  };
};
