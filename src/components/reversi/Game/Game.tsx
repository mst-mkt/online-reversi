import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { Account } from '../Account/Account';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { Status } from '../Status/Status';
import styles from './index.module.scss';

export const Game = ({ roomId }: { roomId: string }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [board, setBoard] = useState<number[][]>();
  const [user] = useAtom(userAtom);
  const router = useRouter();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchBoard = async () => {
    const res = await apiClient.rooms.board.$get({ query: { roomId } });
    if (res === null) {
      router.push('/reversi');
    } else {
      setBoard(res);
    }
  };

  useEffect(() => {
    const cancelId = setInterval(() => {
      fetchBoard();
    }, 100);
    return () => {
      clearInterval(cancelId);
    };
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.board}>
            {board?.map((row, y) =>
              row.map((cell, x) => <div key={`${y}-${x}`} className={styles.cell} />)
            )}
          </div>
          {r}
          <Header toggleModal={toggleModal} />
          <div className={styles.status}>
            <Status title="TURN">
              <p />
            </Status>
            <Status title="COUNT">
              <div style={{ marginBottom: '4px' }}>
                <div className={`${styles['count__disc--black']} ${styles.count__disc}`} />
                <span />
              </div>
              <div>
                <div className={`${styles['count__disc--white']} ${styles.count__disc}`} />
                <span />
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
