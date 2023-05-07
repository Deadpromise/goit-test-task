import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

      body {
        font-family: 'Montserrat', sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
