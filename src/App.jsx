import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { auth } from './firebase-config';
import { error, getCurrentSignedInUser, status, user } from './features/user/userSlice';
import EditItemModal from './components/ItemEditForm/EditItemModal';
import AnimationProvider from './components/animations/AnimationProvider';
import ContactUs from './components/ContactUs/ContactUs';

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
      <AnimationProvider />
      <EditItemModal />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
