import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';

import type { RoomModel } from '$/commonTypesWithClient/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import styles from './index.module.scss';
export const Lobby = () => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const [labelRoomName, setLabelRoomName] = useState('');
  const router = useRouter();

  const fetchRooms = async () => {
    const res = await apiClient.room.list.$get().catch(returnNull);
    if (res !== null) {
      setRooms(res);
    }
  };

  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabelRoomName(e.target.value);
  };

  const createRoom = async (e: FormEvent) => {
    e.preventDefault();
    if (!labelRoomName) return;

    const room = await apiClient.room.$post({ body: { roomName: labelRoomName } });

    router.push({
      pathname: '/reversi',
      query: { room: room.id },
    });
  };

  useEffect(() => {
    const cancelId = setInterval(() => {
      fetchRooms();
    }, 100);
    return () => {
      clearInterval(cancelId);
    };
  }, []);

  return (
    <main className={styles.lobby}>
      <section>
        <h2 className={styles['lobby-caption']}>部屋を作る</h2>
        <form onSubmit={createRoom} className={styles['create-form']}>
          <input
            value={labelRoomName}
            type="text"
            onChange={inputLabel}
            placeholder="type room name"
          />
          <button type="submit" value=" " />
        </form>
      </section>
      <section>
        <h2 className={styles['lobby-caption']}>部屋一覧</h2>
        <ul className={styles['room-list']}>
          {rooms.map((room) => (
            <li key={room.id} className={styles['room-list-item']}>
              <Link
                href={{ pathname: '/reversi', query: { room: room.id } }}
                className={styles['room-link']}
              >
                {room.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
