import * as types from "./actionTypes"
import {
    auth
} from '../firebase-config'

const registerStart = () => ({
    type: types.REGISTER_START
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerFail = (error) => ({
    type: types.REGISTER_FAILED,
    payload: error
})

export const registerInitiate = (firstName, lastName, email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({
            user
        }) => {
            user.updateProfile({
                firstName
            })
            dispatch(registerSuccess(user))
        }).catch((error) => dispatch(registerFail(error.message)))
    }
}