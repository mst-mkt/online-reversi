import type { UserModel } from '$/commonTypesWithClient/models';
import Link from 'next/link';
import { HumanIcon } from 'src/components/icons/HumanIcon';
import { logout } from 'src/utils/login';
import styles from './Account.module.scss';
export const Account = ({ user }: { user: UserModel }) => {
  const onLogout = async () => {
    if (confirm('Logout?')) await logout();
  };
  return (
    <>
      <div className={styles.account}>
        {user.photoURL ? (
          <img className={styles.account__icon} src={user.photoURL} alt={user.displayName} />
        ) : (
          <HumanIcon size={0} fill="#5553" />
        )}
        <p className={styles.account__name}>{user.displayName ? user.displayName : 'No Name'}</p>
        <p className={styles.account__email}>{user.email ? user.email : 'No Email'}</p>
      </div>
      <button onClick={onLogout} className={styles.button}>
        ログアウト
      </button>
      <Link href={{ pathname: '/reversi' }} className={styles.button}>
        ゲームをやめる
      </Link>
    </>
  );
};
