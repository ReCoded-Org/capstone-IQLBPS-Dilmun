import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import SignInPage from './Pages/SignInPage/SignInPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import ItemDetailsPage from './Pages/ItemDetailsPage/ItemDetailsPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <ItemDetailsPage />
    </div>
  );
}
export default App;