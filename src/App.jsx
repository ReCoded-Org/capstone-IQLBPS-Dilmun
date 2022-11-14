import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch,
  //  useSelector
   } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import Footer from './components/Footer/Footer';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';
import {
  login,
  logout,
  // selectUser,
} from './Features/Users/userSlice';
import { auth , onAuthStateChanged } from './firebase-config';
import FaqPage from './Pages/FaqPage/FaqPage';

function App() {
  // TODO: Use this selected user to apply needed conditional rendering

  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

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
      <Footer />
    </div>
  );
}

export default App;
