import type { RoomId } from '$/commonTypesWithClient/branded';
import type { RoomModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    query: {
      roomId: RoomId;
    };
    resBody: RoomModel | null;
  };
  post: {
    reqBody: { roomName: string };
    resBody: RoomModel;
  };
};
