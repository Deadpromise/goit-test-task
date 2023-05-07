import { CardsGallery } from './CardsGallery/CardsGallery';
import { useEffect, useState } from 'react';
import { getUsers } from 'utils/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setStatus(Status.PENDING);
    getUsers(page).then(result => {
      if (page === 1) {
        setResults(result);
        setStatus(Status.RESOLVED);
        return;
      }
      if (result.length === 0) {
        setStatus(Status.REJECTED);
        alert("We're sorry, but you've reached the end of search results.");
        return;
      }
      setResults(prevResults => [...prevResults, ...result]);
      setStatus(Status.RESOLVED);
    });
  }, [page]);
  const resolved = status === 'resolved';
  return (
    <div>
      <CardsGallery results={results}></CardsGallery>
      {resolved && (
        <button type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
