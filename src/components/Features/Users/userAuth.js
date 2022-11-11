import {
    doc,
    setDoc
} from 'firebase/firestore'

import {
    auth,
    db,
    createUserWithEmailAndPassword
} from '../../../firebase-config'


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
        await setDoc(doc(db, "Users", user.uid), {
            firstName,
            lastName
        });
    })
}
