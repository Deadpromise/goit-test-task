import GlobalStyles from 'common-styles/GlobalStyles';
import { CardsGallery } from '../components/CardsGallery/CardsGallery';
import { useEffect, useState } from 'react';
import { getUsers } from 'utils/api';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { BackLink } from 'components/BackLink/BackLink';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Tweets = () => {
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
    <>
      <GlobalStyles />
      <BackLink to="/"></BackLink>
      <CardsGallery results={results}></CardsGallery>
      {resolved && (
        <LoadMoreBtn type="button" onClick={onLoadMore}></LoadMoreBtn>
      )}
    </>
  );
};

export default Tweets;
