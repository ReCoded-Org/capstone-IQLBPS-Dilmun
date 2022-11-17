import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const initialState = {
    isLoading: false,
    status: 'idle',
    error: null,
    item: {},
    itemList: []
};

export const addItem = createAsyncThunk(
    'item/addItem',
    async (payload, { rejectWithValue }) => {
        try {
            // add item to users collection as subcolletion of user after adding item to item collection
            // add item to item collection
            // return item
            const docRef = doc(db, 'Items', payload.id);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: payload.name,
                    price: payload.price,
                    description: payload.description,
                    image: payload.image,
                    category: payload.category,
                    quantity: payload.quantity,
                    seller: payload.seller,
                    sellerId: payload.sellerId,
                    sellerEmail: payload.sellerEmail,
                    sellerPhone: payload.sellerPhone,
                    sellerAddress: payload.sellerAddress,
                    sellerCity: payload.sellerCity,
                    sellerCountry: payload.sellerCountry,
                    sellerImage: payload.sellerImage
                });
            }
            return JSON.stringify(payload);
        } catch (error) {
            return rejectWithValue(JSON.stringify(error));
        }
    }
);


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

        addItem: (state, action) => {
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
export const { resetState, startLoading, HasError } = itemSlice.actions;
