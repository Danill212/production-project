import React from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { className } from 'shared/config/lib/helpers/classNames/classNames';
import { MainPage } from 'pages/MainPage/';
import { AboutPage } from 'pages/AboutPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>
      <Suspense fallback={<div> Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
