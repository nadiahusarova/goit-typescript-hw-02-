import React, { useState, ChangeEvent, FormEvent } from 'react';
import s from './SearchBar.module.css';
import { toast } from 'react-hot-toast';


interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className={s.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
