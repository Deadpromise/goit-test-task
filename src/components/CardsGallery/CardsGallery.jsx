import { UserCard } from 'components/UserCard/UserCard';

export const CardsGallery = ({ results }) => {
  return (
    <>
      <ul>
        {results.map(({ id, tweets, followers, avatar }) => {
          return (
            <UserCard
              key={id}
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
            ></UserCard>
          );
        })}
      </ul>
    </>
  );
};
