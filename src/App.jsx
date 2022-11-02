import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn_SignUp/SignIn';

function App() {
  return (
    <div className="App">
      <SignIn />
      <NavBar />
      <SearchBar />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
