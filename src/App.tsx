import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import themes from './styles/theme.schema.json';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={themes[theme as keyof typeof themes]}>
      <ThemeContext.Provider value={(theme, () => {})}>
        <GlobalStyles theme={themes[theme as keyof typeof themes]} />

        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route />
            </Routes>
          </Layout>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
