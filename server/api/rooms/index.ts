import type { RoomModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    resBody: RoomModel[];
  };
  post: {
    reqBody: { roomName: string };
    resBody: RoomModel;
  };
};
