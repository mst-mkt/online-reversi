import type { ReactNode } from 'react';
import styles from './ButtonIcon.module.scss';

export const ButtonIcon = ({ onclick, children }: { onclick: () => void; children: ReactNode }) => {
  return (
    <button onClick={onclick} className={styles.button}>
      {children}
    </button>
  );
};
