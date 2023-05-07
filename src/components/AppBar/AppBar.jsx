import { NavigatinLink } from './Appbar.styled';

export const AppBar = () => {
  return (
    <nav>
      <NavigatinLink to="/">Home</NavigatinLink>
      <NavigatinLink to="/tweets">Tweets</NavigatinLink>
    </nav>
  );
};
