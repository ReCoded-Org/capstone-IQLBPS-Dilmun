import React from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar/SearchBar';
import AboutUs from './components/AboutUs/AboutUs';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';


const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Features />
      <NewsLetter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>


    </div>
  );
};

const AboutUsRoute = () => {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Footer />
    </div>
  );
};


const NotFound = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '2rem',
        }}
      >
        404 Not Found
      </div>
      <Footer />
    </div>
  )
}
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <AboutUsRoute />,
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App;

