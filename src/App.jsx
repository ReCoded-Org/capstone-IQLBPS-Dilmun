import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { auth } from './firebase-config';
import {
  error,
  getCurrentSignedInUser,
  status,
  user,
} from './features/user/userSlice';
import EditItemModal from './components/ItemEditForm/EditItemModal';
import AnimationProvider from './components/animations/AnimationProvider';
import languages from './components/LanguageButton/LanguageConstant';

function App() {
  const dispatch = useDispatch();

  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );
  const userData = useSelector(user);
  const errorData = useSelector(error);
  const statusData = useSelector(status);
  // eslint-disable-next-line no-console
  console.log(userData, errorData, statusData);
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

  useEffect(() => {
    document.body.dir = currentLanguage.direction;
  }, [currentLanguage]);

  return (
    <div className="App  ">
      <NavBar />
      <AnimationProvider />
      <EditItemModal />
      <Footer />
    </div>
  );
}

export default App;
