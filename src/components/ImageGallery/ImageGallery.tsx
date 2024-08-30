import React from 'react';
import ImageCard from '../ImageCard/ImageCard'; 
import s from './ImageGallery.module.css';

interface Image {
  id: string;
  src: string;
  alt: string;
}


interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
