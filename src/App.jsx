import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<FilterPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
