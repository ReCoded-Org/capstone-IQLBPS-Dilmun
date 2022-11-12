import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
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
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
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
      path: '*',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
