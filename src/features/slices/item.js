import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { dispatch } from "../../app/store";

const initialState = {
    isLoading: false,
    status: 'idle',
    error: null,
    item: {},
    itemList: []
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        resetState: (state) => {
            state.item = {};
            state.status = 'idle';
            state.error = null;
        },

        startLoading: (state) => {
            state.isLoading = true;
        },

        HasError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        getItemSuccess: (state, action) => {
            state.item = action.payload;
            state.isLoading = false;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchItem.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //             state.item = {};
    //         })
    //         .addCase(fetchItem.fulfilled, (state, { payload }) => {
    //             state.status = 'succeeded';
    //             state.error = null;
    //             state.item = JSON.parse(payload);
    //         })
    //         .addCase(fetchItem.rejected, (state, { payload }) => {
    //             state.status = 'failed';
    //             state.error = JSON.parse(payload);
    //             state.item = {};
    //         })
    // }
});

// Reducer
export default itemSlice.reducer;

// Actions

// ADD ITEM to DB and to state (itemList) 
export const addItem = createAsyncThunk(
    'item/addItem',
    async (payload, { rejectWithValue }) => {
        try {
            dispatch(itemSlice.actions.startLoading());
            // add item to users collection as subcolletion of user after adding item to item collection

            // add item to item collection
            // return item
            const { item, user } = payload;
            const docRef = await addDoc(collection(db, "Items"), {
                // name: item.name,
                title: item.title,
                description: item.description,
                price: item.price,
                category: item.category,
                // image: item.image,
                seller: user,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            dispatch(itemSlice.actions.getItemSuccess(payload));
            console.log("Document written with ID: ", docRef.id);
            return JSON.stringify({ ...payload, id: docRef.id });
            // return docRef.id;
        } catch (error) {
            dispatch(itemSlice.actions.HasError(error));
            return rejectWithValue(error);
        }
    }
);
