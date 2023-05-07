import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const LogoImg = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 76px;
  height: 22px;
`;
export const BubleImg = styled.img`
  width: 308px;
  height: 168px;
  margin-top: 28px;
`;
export const AvatarCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  top: calc(50% - 40px);
`;
export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  z-index: 2;
`;
export const AvatarLine = styled.img`
  position: absolute;
  top: 34px;
  width: 380px;
  height: 16px;
`;
export const AvatarOutline = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 3;
`;
export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
`;
export const UserInfo = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
export const FollowButton = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin-top: 26px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
