import React from 'react';
// import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar';
import SignInPage from './Pages/SignInPage'

// import {
//   SIGN_IN_ROUTE,
// } from './route';

function App() {
  return (
    <div className="App">
    <NavBar />
    <SignInPage/>
      <SearchBar />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
