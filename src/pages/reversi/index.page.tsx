import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { ButtonIcon } from 'src/components/ButtonIcon/ButtonIcon';
import { Loading } from 'src/components/Loading/Loading';
import { MenuIcon } from 'src/components/icons/MenuIcon';
import { Account } from 'src/components/reversi/Account/Account';
import { Modal } from 'src/components/reversi/Modal/Modal';
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
    const board = await apiClient.board.$get().catch(returnNull);
    if (board?.board !== null) setBoard(board?.board);
    if (board?.currentTurnColor !== null) setTurnColor(board?.currentTurnColor);
    if (board?.yourColor !== null) setMyColor(board?.yourColor);
  };

  const clickCell = async (x: number, y: number) => {
    await apiClient.board.post({ body: { x, y } });
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
          <header className={styles.header}>
            <div className={styles.header__title}>
              <h1>Reversi</h1>
              <p>Created at INIAD Developers</p>
            </div>
            <ButtonIcon onclick={toggleModal}>
              <MenuIcon size={24} fill="#555" />
            </ButtonIcon>
          </header>
          <div className={styles.status}>
            <div className={styles.status__content}>
              <h2>TURN</h2>
              <p>{turnColor === myColor ? 'あなた' : '相手'}のターン</p>
            </div>
            <div className={styles.status__content}>
              <h2>COUNT</h2>
              <div>
                <div className={`${styles['count__disc--black']} ${styles.count__disc}`} />
                <span>{countCell(1)}</span>
              </div>
              <div>
                <div className={`${styles['count__disc--white']} ${styles.count__disc}`} />
                <span>{countCell(2)}</span>
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
      <Modal show={showModal} onClose={closeModal} title="">
        <Account user={user} />
      </Modal>
    </>
  );
};

export default Home;
