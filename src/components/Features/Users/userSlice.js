import {
    createSlice,
} from "@reduxjs/toolkit"

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default userSlice