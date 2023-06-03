import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../../atoms/user';
import styles from './reversi.module.scss';

const Home = () => {
  const [user] = useAtom(userAtom);

  const [board, setBoard] = useState<number[][]>();

  const fetchBoard = async () => {
    const board = await apiClient.board.$get().catch(returnNull);
    if (board !== null) setBoard(board.board);
  };

  const clickCell = async (x: number, y: number) => {
    await apiClient.board.post({ body: { x, y } });
    await fetchBoard();
  };

  useEffect(() => {
    const cancelId = setInterval(fetchBoard, 500);
    return () => {
      clearInterval(cancelId);
    };
  }, []);

  if (!user || !board) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.board}>
            {board.map((row, y) =>
              row.map((color, x) => (
                <div className={styles.cell} key={`${x}_${y}`} onClick={() => clickCell(x, y)}>
                  {color > 0 && (
                    <div
                      className={styles.disc}
                      style={{ backgroundColor: color === 1 ? '#444' : '#fff' }}
                    />
                  )}
                  {color === -1 && <div className={styles.suggest} />}
                </div>
              ))
            )}
          </div>
          <header className={styles.header}>
            <div className={styles.header__title}>
              <h1>Reversi</h1>
              <p>Created at INIAD Developers</p>
            </div>
            <button className={styles.header__button}>
              <svg
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                <path d="M20 4v5h-5" />
                about:blank#blocked{' '}
              </svg>
            </button>
          </header>
          <div className={styles.status}>
            <div className={styles.status__content}>
              <h2>TURN</h2>
              <p>のターン</p>
            </div>
            <div className={styles.status__content}>
              <h2>COUNT</h2>
              <div>
                <div className={`${styles['count__disc--black']} ${styles.count__disc}`} />
                <span />
              </div>
              <div>
                <div className={`${styles['count__disc--white']} ${styles.count__disc}`} />
                <span />
              </div>
            </div>
            <div className={styles.status__content}>
              <h2>SCORE</h2>
              <div className={styles.score}>
                <div className={`${styles.score__disc} ${styles['score__disc--black']}`} />
                <span className={styles.score__text} />
                <div className={`${styles.score__disc} ${styles['score__disc--white']}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
