import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch,
  //  useSelector
   } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
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

function App() {

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
}
export default App;
