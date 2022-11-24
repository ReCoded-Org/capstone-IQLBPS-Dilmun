import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import AnimationProvider from './components/animations/AnimationProvider'
import LoadingScreen from './components/animations/LoadingScreen'
import Footer from './components/Footer/Footer';
import { auth } from './firebase-config';
import {
  error,
  getCurrentSignedInUser,
  status,
  user,
} from './features/slices/user';
import { UserItemCard } from './components/Cards';
// import ItemCard from './components/ItemCard/ItemCard';
import ItemCardSection from './components/ItemCard/ItemCardSection';

const MOCK_ITEM = {
  title: 'Title of Item Goes Here',
  file: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  description: 'Description of item Here...',
  price: 110,
  type: 'Item Type',
  categories: ['Men', 'Women', 'Kids'],
};

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
    }, 500);
  }, []);

  return (
    <div className="App  ">
      {loading === true ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <AnimationProvider />
          <UserItemCard item={MOCK_ITEM} />
          <ItemCardSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
