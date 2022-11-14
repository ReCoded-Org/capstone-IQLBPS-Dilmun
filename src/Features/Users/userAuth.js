import {
    doc,
    setDoc
} from 'firebase/firestore'
import {
    toast
} from 'react-toastify'
import {
    useNavigate
} from 'react-router-dom';
import {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from '../../firebase-config'


export const signUpUsers = async (data) => {

    const {
        email,
        password,
        firstName,
        lastName
    } = data

    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const {
            user
        } = userCredential
        // eslint-disable-next-line no-console
        console.log(user)
        toast.success("Registration Completed!")
        await setDoc(doc(db, "Users", user.uid), {
            firstName,
            lastName
        });
    }).catch((error) => {
        toast.error(error.message)
    })
}


export const signInUsers = async (data) => {
    const navigate = useNavigate()
    const {
        email,
        password
    } = data
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const {
                user
            } = userCredential;
            // eslint-disable-next-line no-console
            console.log(user)
            toast.success("Welcome Back!")
            navigate('/')
        }).catch((error) => {
            toast.error(error.message)
        })
}