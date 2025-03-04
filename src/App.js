import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './login';
import RegistrationForm from './Registration';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/Registration" element={<RegistrationForm />} />
    </Routes>
  );
}
