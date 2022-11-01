import React from 'react';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SignIn from './components/SignIn_SignUp/SignIn';
import SignUp from './components/SignIn_SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <NavBar />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
