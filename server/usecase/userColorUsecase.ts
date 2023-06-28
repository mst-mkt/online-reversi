import type { UserId } from '$/commonTypesWithClient/branded';

const userColorDict: { black?: UserId; white?: UserId; audience: UserId[] } = { audience: [] };
export const userColorUsecase = {
  getUserColor: (userId: UserId): 0 | 1 | 2 => {
    if (userColorDict.black === userId) return 1;
    else if (userColorDict.white === userId) return 2;
    else if (userColorDict.audience?.includes(userId)) return 0;
    else if (userColorDict.black === undefined) {
      userColorDict.black = userId;
      return 1;
    } else if (userColorDict.white === undefined) {
      userColorDict.white = userId;
      return 2;
    } else {
      userColorDict.audience.push(userId);
      return 0;
    }
  },
};
