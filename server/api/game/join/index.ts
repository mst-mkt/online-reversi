import type { RoomId } from '$/commonTypesWithClient/branded';
import type { RoomModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: RoomId;
    resBody: RoomModel | null;
  };
};
