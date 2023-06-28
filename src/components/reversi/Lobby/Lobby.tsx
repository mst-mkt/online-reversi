import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';

import type { RoomModel } from '$/commonTypesWithClient/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
export const Lobby = () => {
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const [labelRoomName, setLabelRoomName] = useState('');
  const router = useRouter();
  const fetchRooms = async () => {
    const res = await apiClient.rooms.$get().catch(returnNull);
    if (res === null) {
      setRooms([]);
    } else {
      setRooms(res);
    }
  };

  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabelRoomName(e.target.value);
  };
  const createRoom = async (e: FormEvent) => {
    e.preventDefault();
    if (!labelRoomName) return;
    console.log(labelRoomName);

    await apiClient.rooms.$post({ body: { roomName: labelRoomName } });

    router.push({
      pathname: '/reversi',
      query: { room: labelRoomName },
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
    <>
      <form onSubmit={createRoom}>
        <input
          value={labelRoomName}
          type="text"
          onChange={inputLabel}
          placeholder="type room name"
        />
        <input type="submit" value="create" />
      </form>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link href={{ pathname: '/reversi', query: { room: room.id } }}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
