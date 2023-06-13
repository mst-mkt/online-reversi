import type { UserId } from '$/commonTypesWithClient/branded';
import { userColorUsecase } from './userColorUsecase';

export type BoardArr = (-1 | 0 | 1 | 2)[][];

export type BoardObj = {
  board: BoardArr;
  currentTurnColor: 1 | 2;
  yourColor: 1 | 2;
};
type DirArr = (-1 | 0 | 1)[][];

export type Pos = {
  x: number;
  y: number;
};

let turnColor: 1 | 2 = 1;

const board: BoardArr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, -1, 0, 0, 0],
  [0, 0, 0, 1, 2, -1, 0, 0],
  [0, 0, -1, 2, 1, 0, 0, 0],
  [0, 0, 0, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let canPutDisc: BoardArr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const directions: DirArr = [
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];

const cellState = (x: number, y: number) => {
  if (board[y] === undefined) {
    return -1;
  } else {
    if (board[y][x] === undefined) {
      return -1;
    } else {
      return board[y][x];
    }
  }
};

const canPutOneDir = (x: number, y: number, dir: (-1 | 0 | 1)[]): boolean => {
  if (cellState(x + dir[0], y + dir[1]) !== 3 - turnColor) return false;
  for (let i = 2; i < 8; i++) {
    if (cellState(x + i * dir[0], y + i * dir[1]) <= 0) return false;
    if (cellState(x + i * dir[0], y + i * dir[1]) === turnColor) return true;
  }
  return false;
};

const canPut = (x: number, y: number): boolean => {
  const bools: boolean[] = [];
  for (const dir of directions) {
    bools.push(canPutOneDir(x, y, dir));
  }
  if (board[y][x] <= 0) {
    return bools.some(Boolean);
  } else {
    return false;
  }
};

const returnDisc = (x: number, y: number) => {
  const returnLine = (x: number, y: number, dir: (-1 | 0 | 1)[]) => {
    if (canPutOneDir(x, y, dir)) {
      board[y][x] = turnColor;
      for (let i = 1; i < 8; i++) {
        if (board[y + i * dir[1]][x + i * dir[0]] === turnColor) break;
        board[y + i * dir[1]][x + i * dir[0]] = turnColor;
      }
    }
  };
  for (const dir of directions) {
    returnLine(x, y, dir);
  }
};

const resetCanPutDisc = () => {
  canPutDisc = canPutDisc.map((row, y) => {
    return row.map((cell, x) => {
      return canPut(x, y) ? 1 : 0;
    });
  });
};

const setSuggest = () => {
  for (let i = 0; i < 64; i++) {
    const x: number = i % 8;
    const y: number = Math.floor(i / 8);
    if (board[y][x] <= 0) {
      board[y][x] = canPutDisc[y][x] ? -1 : 0;
    }
  }
};

export const boardUsecase = {
  getBoard: (userId: UserId): BoardObj => {
    return {
      board,
      currentTurnColor: turnColor,
      yourColor: userColorUsecase.getUserColor(userId),
    };
  },
  clickBoard: (params: Pos, userId: UserId): BoardObj => {
    if (turnColor === userColorUsecase.getUserColor(userId) && canPut(params.x, params.y)) {
      returnDisc(params.x, params.y);
      turnColor = (2 / turnColor) as 1 | 2;
      resetCanPutDisc();
      setSuggest();
    }
    return {
      board,
      currentTurnColor: turnColor,
      yourColor: userColorUsecase.getUserColor(userId),
    };
  },
  canPutDisc: () => canPutDisc,
};
