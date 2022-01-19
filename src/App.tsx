import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import themes from './styles/theme.schema.json';
import Layout from './components/Layout/Layout';
import Home from './components/HomePage/Home';
import CountryPage from './components/CountryPage/CountryPage';

type PropsTheme = {
  theme: 'light' | 'dark';
  toggleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<PropsTheme>({
  theme: 'light',
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themeContext: PropsTheme = {
    theme,
    toggleTheme: theme => {
      theme === 'light' ? setTheme('dark') : setTheme('light');
    },
  };
  return (
    <ThemeProvider theme={themes[theme as keyof typeof themes]}>
      <ThemeContext.Provider value={themeContext}>
        <GlobalStyles theme={themes[theme as keyof typeof themes]} />

        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/country/:name' element={<CountryPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
