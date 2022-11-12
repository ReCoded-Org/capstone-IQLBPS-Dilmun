import React from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutUs from './components/AboutUs/AboutUs';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';


const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<FilterPage />} />
      </Routes>
    </div>
  );
};

const AboutUsRoute = () => {
  return (
    <div>
      <NavBar />
      <AboutUs />
    </div>
  );
};



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
    
  ]);

  return <RouterProvider router={router} />;
}


export default App;

