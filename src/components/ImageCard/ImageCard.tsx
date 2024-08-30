import React from 'react';
import s from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        className={s.image}
        onClick={onClick} 
      />
    </div>
  );
};

export default ImageCard;
