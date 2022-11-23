import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { auth } from './firebase-config';
import {
  error,
  getCurrentSignedInUser,
  status,
  user,
} from './features/slices/user';
import AnimationProvider from './components/animations/AnimationProvider';
import ProfileItemPage from './Pages/ProfileItemPage/ProfileItemPage';

import { UserItemCard } from './components/Cards';

function App() {
  const dispatch = useDispatch();

  const userData = useSelector(user);
  const errorData = useSelector(error);
  const statusData = useSelector(status);
  // eslint-disable-next-line no-console
  console.log(userData, errorData, statusData);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          getCurrentSignedInUser({
            id: currentUser.uid,
            email: currentUser.email,
          })
        );
      } else {
        // eslint-disable-next-line no-console
        console.log('no user');
      }
    });
  }, []);

  return (
    <div className="App  ">
      <NavBar />
      <ProfileItemPage />
      <AnimationProvider />
      <UserItemCard />
      <Footer />
    </div>
  );
}

export default App;
