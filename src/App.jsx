import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import Footer from './components/Footer/Footer';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import AddItemPage from './Pages/AddItemPage/AddItemPage';
import FilterPage from './Pages/FilterPage/FilterPage';
import FaqPage from './Pages/FaqPage/FaqPage';

function App() {
  return (
    <div className="App  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<FilterPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <AddItemPage/>
      <Footer />
    </div>
  );
}

export default App;
