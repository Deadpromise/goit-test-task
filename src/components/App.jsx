import { CardsGallery } from './CardsGallery/CardsGallery';
import { useEffect, useState } from 'react';
import { getUsers } from 'utils/api';

export const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    getUsers(page).then(result => {
      if (page === 1) {
        setResults(result);
        return;
      }
      setResults(prevResults => [...prevResults, ...result]);
    });
  }, [page]);

  return (
    <div>
      <CardsGallery results={results}></CardsGallery>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};
