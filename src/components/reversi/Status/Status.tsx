import type { ReactNode } from 'react';
import styles from './Status.module.scss';

export const Status = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className={styles.status}>
      <h2 className={styles.status__title}>{title}</h2>
      <div className={styles.status__content}>{children}</div>
    </div>
  );
};
