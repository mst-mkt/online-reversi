import type { UserId } from '$/commonTypesWithClient/branded';
import { userColorRepository } from './userColorRepository';

export type BoardArr = (-1 | 0 | 1 | 2)[][];
export type Pos = {
  x: number;
  y: number;
};

const board: BoardArr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const boardRepository = {
  getBoard: () => board,
  clickBoard: (params: Pos, userId: UserId): BoardArr => {
    board[params.y][params.x] = userColorRepository.getUserColor(userId);
    return board;
  },
};
