import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
