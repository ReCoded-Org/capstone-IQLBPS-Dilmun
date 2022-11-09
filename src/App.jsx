import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar';
import AboutUs from './components/AboutUs/AboutUs';

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Features />
      <NewsLetter />
      <Footer />
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

