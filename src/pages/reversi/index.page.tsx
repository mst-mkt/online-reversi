import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { Account } from 'src/components/reversi/Account/Account';
import { Header } from 'src/components/reversi/Header/Header';
import { Modal } from 'src/components/reversi/Modal/Modal';
import { Status } from 'src/components/reversi/Status/Status';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../../atoms/user';
import styles from './reversi.module.scss';

const Home = () => {
  const [user] = useAtom(userAtom);

  const [board, setBoard] = useState<number[][]>();
  const [turnColor, setTurnColor] = useState<number>();
  const [myColor, setMyColor] = useState<number>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchBoard = async () => {
    const res = await apiClient.rooms.$get().catch(returnNull);
    if (res === null) {
      const newRoom = await apiClient.rooms.$post({ body: { x: 0, y: 0 } });
      setBoard(newRoom.board);
    } else {
      setBoard(res.board);
    }
  };

  const clickCell = async (x: number, y: number) => {
    await apiClient.rooms.$post({ body: { x, y } });
    await fetchBoard();
  };

  const countCell = (color: number) => {
    return board?.flat().filter((v) => v === color).length;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const cancelId = setInterval(() => {
      fetchBoard();
    }, 100);
    return () => {
      clearInterval(cancelId);
    };
  }, []);

  if (!user || !board) return <Loading visible />;

  return (
    <>
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
                  {color === -1 && turnColor === myColor && <div className={styles.suggest} />}
                </div>
              ))
            )}
          </div>
          <Header toggleModal={toggleModal} />
          <div className={styles.status}>
            <Status title="TURN">
              <p>{turnColor === myColor ? 'あなた' : '相手'}のターン</p>
            </Status>
            <Status title="COUNT">
              <div style={{ marginBottom: '4px' }}>
                <div className={`${styles['count__disc--black']} ${styles.count__disc}`} />
                <span>{countCell(1)}</span>
              </div>
              <div>
                <div className={`${styles['count__disc--white']} ${styles.count__disc}`} />
                <span>{countCell(2)}</span>
              </div>
            </Status>
            <Status title="SCORE">
              <div className={styles.score}>
                <div className={`${styles.score__disc} ${styles['score__disc--black']}`} />
                <span className={styles.score__text}>未実装</span>
                <div className={`${styles.score__disc} ${styles['score__disc--white']}`} />
              </div>
            </Status>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} title="">
        <Account user={user} />
      </Modal>
    </>
  );
};

export default Home;
