import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import Footer from './components/Footer/Footer';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import AddItemPage from './Pages/AddItemPage/AddItemPage';
import FilterPage from './Pages/FilterPage/FilterPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import { auth } from './firebase-config';
import { error, getCurrentSignedInUser, status, user } from './features/user/userSlice';
import EditItemModal from './components/ItemEditForm/EditItemModal';

function App() {
  const dispatch = useDispatch();

  const userData = useSelector(user)
  const errorData = useSelector(error)
  const statusData = useSelector(status)
  // eslint-disable-next-line no-console
  console.log(userData, errorData, statusData)
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(getCurrentSignedInUser(currentUser.uid));
      } else {
        // eslint-disable-next-line no-console
        console.log('no user');
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
      <AddItemPage />
      <EditItemModal />
      <Footer />
    </div>
  );
}

export default App;
