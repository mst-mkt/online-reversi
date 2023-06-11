import type { BoardArr, BoardObj, Pos } from '$/repository/boardRepository';

export type Methods = {
  get: {
    resBody: {
      board: BoardArr;
    };
  };
  post: {
    reqBody: Pos;
    resBody: BoardObj;
  };
};
