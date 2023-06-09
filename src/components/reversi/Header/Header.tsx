import Link from 'next/link';
import { ButtonIcon } from 'src/components/ButtonIcon/ButtonIcon';
import { MenuIcon } from 'src/components/icons/MenuIcon';
import styles from './Header.module.scss';

export const Header = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <header className={styles.header}>
      <Link href={{ pathname: '/reversi' }}>
        <div className={styles.header__title}>
          <h1>Reversi</h1>
          <p>Created at INIAD Developers</p>
        </div>
      </Link>
      <ButtonIcon onclick={toggleModal}>
        <MenuIcon size={24} fill="#555" />
      </ButtonIcon>
    </header>
  );
};
