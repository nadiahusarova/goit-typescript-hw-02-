import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { Image } from '../../types';

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={s.ModalContent}
      overlayClassName={s.ModalOverlay}
    >
      <div className={s.ImageWrapper}>
        <img src={image?.urls?.regular} alt="Large view" className={s.Image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
