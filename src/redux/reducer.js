import * as types from "./actionTypes"

const initialState = {
    loading: false,
    currentUser: null,
    error: null,
}

const userReducer = (action, state = initialState) => {
    switch (action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                loading: true
            }
            case types.REGISTER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                        currentUser: action.payload
                }
                case types.REGISTER_FAILED:
                    return {
                        ...state,
                        loading: false,
                            error: action.payload
                    }
                    default:
                        return state
    };
}

export default userReducer