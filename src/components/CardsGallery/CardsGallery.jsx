import { UserCard } from 'components/UserCard/UserCard';
import { Gallery } from './CardsGallery.styled';

export const CardsGallery = ({ results }) => {
  return (
    <Gallery>
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
    </Gallery>
  );
};
