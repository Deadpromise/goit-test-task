import { useEffect, useState } from 'react';
import Ellipse from '../../images/Ellipse1.png';
import Logo from '../../images/Logo.png';
import SpeachBuble from '../../images/picture2.png';
import Line from '../../images/Rectangle1.png';
import {
  Card,
  FollowButton,
  LogoImg,
  AvatarCont,
  AvatarImg,
  AvatarOutline,
  AvatarLine,
  BubleImg,
  TweetInfo,
  UserInfo,
} from './UserCard.styled';
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
    <Card>
      <LogoImg src={Logo} alt="logo" />
      <BubleImg src={SpeachBuble} alt="speach-buble" />
      <AvatarCont>
        <AvatarImg src={avatar} alt="avatar" />
        <AvatarLine src={Line} alt="line" />
        <AvatarOutline src={Ellipse} alt="ellipse" />
      </AvatarCont>
      <TweetInfo>
        <UserInfo>{tweets} TWEETS</UserInfo>
        <UserInfo>{cardFollowers.toLocaleString('en-US')} FOLLOWERS</UserInfo>
        <FollowButton
          backgroundColor={following ? '#5CD3A8' : '#EBD8FF'}
          type="button"
          onClick={() => {
            handleClick(following);
          }}
        >
          {following ? 'FOLLOWING' : 'FOLLOW'}
        </FollowButton>
      </TweetInfo>
    </Card>
  );
};
