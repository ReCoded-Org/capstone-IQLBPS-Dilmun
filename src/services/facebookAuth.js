import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../firebase-config';

const handleFacebookAuth = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export default handleFacebookAuth;
