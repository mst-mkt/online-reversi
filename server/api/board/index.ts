import type { BoardObj, Pos } from '$/repository/boardRepository';

export type Methods = {
  get: {
    resBody: BoardObj;
  };
  post: {
    reqBody: Pos;
    resBody: BoardObj;
  };
};
