import { useEffect, useState } from 'react';
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
import LoadingScreen from './components/animations/LoadingScreen';
import NotFound from  './components/NotFound/NotFound';
import EditItemModal from './components/ItemEditForm/EditItemModal';
import Alert from './components/alert/Alert';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App  ">
     {loading === true ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <AnimationProvider />
          <EditItemModal />
          <Alert color="bg-red-500">Alert</Alert>
          <NotFound />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
