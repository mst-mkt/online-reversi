import type { RoomModel } from '$/commonTypesWithClient/models';
import type { Pos } from '$/usecase/boardUsecase';

export type Methods = {
  get: {
    resBody: RoomModel | null;
  };
  post: {
    reqBody: Pos;
    resBody: RoomModel;
  };
};
