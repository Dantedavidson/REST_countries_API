import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import themes from './styles/theme.schema.json';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themes[theme as keyof typeof themes]}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element />
          <Route />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
