import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './login';
import RegistrationForm from './Registration';
import Admin from "./student_dashboard"
import Academia from './academia';
import Teacher from './teacher';
import Tutor from './tuotor';
import SRegistrationForm from './RegisterStudent';
import TRegistrationForm from './tregistration';
import TURegistrationForm from './turegister';


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/Registration" element={<RegistrationForm />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Student" element={<Academia/>} />
      <Route path="/Teacher" element={<Teacher />} />
      <Route path="/Tutor" element={<Tutor />} />
      <Route path="/Sregister" element={<SRegistrationForm/>} />
      <Route path="/Tregister" element={<TRegistrationForm/>} />
      <Route path="/Turegister" element={<TURegistrationForm/>} />



    </Routes>
  );
}
