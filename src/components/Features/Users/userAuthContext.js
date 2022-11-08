import {
    addDoc,
    collection
} from "firebase/firestore"
import React, {
    useContext,
    useEffect,
    useMemo,
    useState
} from "react"
import {
    auth,
    db,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from '../../../firebase-config'

const AuthContext = React.createContext()
export const useAuth = () => {
    return useContext(AuthContext)
}

const userAuthContext = ({
    children
}) => {
    const [error, setError] = useState("")
    const [currentuser, setCurrentUser] = useState()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                // eslint-disable-next-line no-console
                console.log(user.uid)
            // eslint-disable-next-line no-console
            } else console.log("User is not Available")
        })
    }, [])
    const signUp = (email, password, firstName, lastName) => {
        setError("")
        createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
            // eslint-disable-next-line no-console
            console.log(result.user)
            await addDoc(collection(db,"Users"),{firstName,lastName})
        }).catch((e) => {
            if (e.code === "Email already Exist") {
                setError("Email is already in use try to Login")
            }
        })
    }

    // const value = {
    //     currentuser,
    //     signUp,
    //     error
    // }

    const value = useMemo(()=>({
        currentuser,
        signUp,
        error
    }),[])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default userAuthContext