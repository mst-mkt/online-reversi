import type { Pos } from '$/usecase/boardUsecase';
import type { BoardArr } from './../../../usecase/boardUsecase';

export type Methods = {
  get: {
    resBody: BoardArr;
  };
  post: {
    reqBody: Pos;
    resBody: BoardArr;
  };
};
