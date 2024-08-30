import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Loader from '../Loader/Loader'; // Розкоментуй це, якщо використовуєш
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import axios from 'axios';
import './App.css';
import { Image } from '../../types';
import Loader from '../Loader/Loader';

const ACCESS_KEY = '9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${ACCESS_KEY}&page=${page}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError('OOOPS! Something went wrong. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const loadMoreImages = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
