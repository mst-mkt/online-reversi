import type { RoomId } from '$/commonTypesWithClient/branded';
import type { BoardArr, Pos } from '$/usecase/boardUsecase';

export type Methods = {
  get: {
    query: {
      roomId: RoomId;
    };
    resBody: BoardArr;
  };
  post: {
    reqBody: Pos;
    resBody: BoardArr;
  };
};
