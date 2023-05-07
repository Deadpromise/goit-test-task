import { useEffect, useState } from 'react';
import Ellipse from '../../images/Ellipse1.png';
import Logo from '../../images/Logo.png';
import SpeachBuble from '../../images/picture2.png';
import Line from '../../images/Rectangle1.png';
import { FollowButton } from './UserCard.styled';
import { updateUserFollowers } from 'utils/api';

export const UserCard = ({ id, tweets, followers, avatar }) => {
  const [following, setFollowing] = useState(false);
  const [cardFollowers, setCardFollowers] = useState(followers);

  useEffect(() => {
    const localFollowing = localStorage.getItem(`card${id}`);
    if (localFollowing) {
      setFollowing(JSON.parse(localFollowing));
    }
  }, [id]);

  //   useEffect(() => {
  //     const updateFollowers = async () => {
  //       const newFollowers = following ? followers - 1 : followers + 1;
  //       const res = await updateUserFollowers(id, newFollowers);
  //       setCardFollowers(res.followers);
  //     };
  //     updateFollowers();
  //   }, [id, following, followers]);

  //   const handleClick = following => {
  //     setFollowing(!following);
  //     if (following) {
  //       const newFollowers = followers - 1;
  //       setCardFollowers(newFollowers);
  //       //   updateUserFollowers(id, newFollowers).then(res => {
  //       //     setCardFollowers(res.followers);
  //       //   });
  //     }
  //     if (!following) {
  //       const newFollowers = followers + 1;
  //       setCardFollowers(newFollowers);
  //       //   updateUserFollowers(id, newFollowers).then(res => {
  //       //     setCardFollowers(res.followers);
  //       //   });
  //     }

  //   localStorage.setItem(`card${id}`, JSON.stringify(!following));
  //   };
  const handleClick = following => {
    if (following) {
      const newFollowers = cardFollowers - 1;
      setCardFollowers(newFollowers);
      updateUserFollowers(id, newFollowers).then(res => {
        setCardFollowers(res.followers);
      });
    }
    if (!following) {
      const newFollowers = cardFollowers + 1;
      setCardFollowers(newFollowers);
      updateUserFollowers(id, newFollowers).then(res => {
        setCardFollowers(res.followers);
      });
    }
    setFollowing(!following);
    localStorage.setItem(`card${id}`, JSON.stringify(!following));
  };

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <img src={Ellipse} alt="ellipse" />
      <img src={avatar} alt="avatar" />
      <img src={Logo} alt="logo" />
      <img src={SpeachBuble} alt="speach-buble" />
      <img src={Line} alt="line" />
      <p>{tweets} TWEETS</p>
      <p>{cardFollowers.toLocaleString('en-US')} FOLLOWERS</p>
      <FollowButton
        backgroundColor={following ? 'red' : 'green'}
        type="button"
        onClick={() => {
          handleClick(following);
        }}
      >
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </FollowButton>
    </div>
  );
};
