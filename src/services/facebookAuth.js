import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../firebase-config';

const handleFacebookAuth = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const {user} = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const { email } = error.customData;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorCode, errorMessage, email, credential);
    // ...
  }
};

export default handleFacebookAuth;
