import type { ReactNode } from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonIcon } from 'src/components/ButtonIcon/ButtonIcon';
import { CloseIcon } from 'src/components/icons/CloseIcon';
import styles from './Modal.module.scss';

export const Modal = ({
  show,
  title,
  onClose,
  children,
}: {
  onClose: () => void;
  show: boolean;
  title: string;
  children: ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(show);
  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };
  return (
    <CSSTransition
      in={show}
      timeout={400}
      classNames={{
        enter: styles['modal--enter'],
        enterActive: styles['modal--enter-active'],
        exit: styles['modal--exit'],
        exitActive: styles['modal--exit-active'],
      }}
      unmountOnExit
      onExited={onClose}
    >
      <div className={styles.modal}>
        <div className={styles.modal__background} onClick={closeModal} />
        <div className={styles.modal__inner}>
          <header className={styles.modal__header}>
            {title && <h2>{title}</h2>}
            <ButtonIcon onclick={closeModal}>
              <CloseIcon size={24} fill="#555" />
            </ButtonIcon>
          </header>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
