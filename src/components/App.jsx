import { CardsGallery } from './CardsGallery/CardsGallery';
import { useEffect, useState, lazy } from 'react';
import { getUsers } from 'utils/api';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };
export const App = () => {
  const HomePage = lazy(() => import('../pages/Home'));
  const TweetsPage = lazy(() => import('../pages/Tweets'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
  //   const [results, setResults] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [status, setStatus] = useState(Status.IDLE);
  //   const onLoadMore = () => {
  //     setPage(prevPage => prevPage + 1);
  //   };
  //   useEffect(() => {
  //     setStatus(Status.PENDING);
  //     getUsers(page).then(result => {
  //       if (page === 1) {
  //         setResults(result);
  //         setStatus(Status.RESOLVED);
  //         return;
  //       }
  //       if (result.length === 0) {
  //         setStatus(Status.REJECTED);
  //         alert("We're sorry, but you've reached the end of search results.");
  //         return;
  //       }
  //       setResults(prevResults => [...prevResults, ...result]);
  //       setStatus(Status.RESOLVED);
  //     });
  //   }, [page]);
  //   const resolved = status === 'resolved';
  //   return (
  //     <div>
  //       <CardsGallery results={results}></CardsGallery>
  //       {resolved && (
  //         <button type="button" onClick={onLoadMore}>
  //           Load more
  //         </button>
  //       )}
  //     </div>
  //   );
};
