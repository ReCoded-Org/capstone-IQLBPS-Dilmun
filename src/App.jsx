import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import AnimationProvider from './components/animations/AnimationProvider';
import LoadingScreen from './components/animations/LoadingScreen';
import Footer from './components/Footer/Footer';
import { auth } from './firebase-config';
import { getCurrentSignedInUser } from './features/slices/user';
import Router from './routes';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-console
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
    }, 500);
  }, []);

  return (
    <div className="App bg-background">
      {loading === true ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <AnimationProvider>
            <Router />
          </AnimationProvider>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
