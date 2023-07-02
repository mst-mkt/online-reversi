import type { RoomId } from '$/commonTypesWithClient/branded';
import { useRouter } from 'next/router';
import { Game } from 'src/components/reversi/Game/Game';
import { Lobby } from 'src/components/reversi/Lobby/Lobby';

const Home = () => {
  const router = useRouter();
  const roomId = router.query.room as RoomId;

  // useEffect(() => {
  //   const cancelId = setInterval(() => {
  //     fetchBoard();
  //   }, 100);
  //   return () => {
  //     clearInterval(cancelId);
  //   };
  // }, []);

  if (!roomId) return <Lobby />;
  return <Game roomId={roomId} />;

  // return (
  //   <>
  //     <div className={styles.container}>
  //       <div className={styles.layout}>
  //         <div className={styles.board}>{roomId}</div>
  //         <Header toggleModal={toggleModal} />
  //         <div className={styles.status}>
  //           <Status title="TURN">
  //             {/* <p>{turnColor === myColor ? 'あなた' : '相手'}のターン</p> */}
  //           </Status>
  //           <Status title="COUNT">
  //             <div style={{ marginBottom: '4px' }}>
  //               <div className={`${styles['count__disc--black']} ${styles.count__disc}`} />
  //               <span>{countCell(1)}</span>
  //             </div>
  //             <div>
  //               <div className={`${styles['count__disc--white']} ${styles.count__disc}`} />
  //               <span>{countCell(2)}</span>
  //             </div>
  //           </Status>
  //           <Status title="SCORE">
  //             <div className={styles.score}>
  //               <div className={`${styles.score__disc} ${styles['score__disc--black']}`} />
  //               <span className={styles.score__text}>未実装</span>
  //               <div className={`${styles.score__disc} ${styles['score__disc--white']}`} />
  //             </div>
  //           </Status>
  //         </div>
  //       </div>
  //     </div>
  //     <Modal show={showModal} onClose={closeModal} title="">
  //       <Account user={user} />
  //     </Modal>
  //   </>
  // );
};

export default Home;
