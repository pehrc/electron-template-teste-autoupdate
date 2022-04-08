import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
