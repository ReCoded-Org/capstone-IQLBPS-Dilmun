import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { dispatch } from '../../app/store';

const initialState = {
  isLoading: false,
  status: 'idle',
  error: null,
  item: {},
  itemList: [],
  userItems: [],
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

    getItemListSuccess: (state, action) => {
      state.itemList = action.payload;
      state.isLoading = false;
    },

    getUserItemsSuccess: (state, action) => {
      state.userItems.push(action.payload);
      state.isLoading = false;
    },
  },
});

// Reducer
export default itemSlice.reducer;

// Actions

// ADD ITEM to DB and to state (userItems)
export const addItem = createAsyncThunk(
  'item/addItem',
  async (payload, { rejectWithValue }) => {
    try {
      dispatch(itemSlice.actions.startLoading());
      const { item, owner, file } = payload;
      const data = {
        file,
        title: item.title,
        price: `${item.price} $`,
        description: item.description,
        category: item.category,
        type: item.type,
        owner,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const docRef = await addDoc(collection(db, 'Items'), data);
      // add item to user collection as subcollection
      await setDoc(doc(db, 'Users', owner.uid, 'Items', docRef.id), data);
      // save item to state
      dispatch(itemSlice.actions.getItemSuccess(payload));
      // save item to userItems
      dispatch(itemSlice.actions.getUserItemsSuccess(item));
      return JSON.stringify({ ...payload, id: docRef.id });
    } catch (error) {
      dispatch(itemSlice.actions.HasError(error));
      return rejectWithValue(error);
    }
  }
);

// export const updateItemImage = createAsyncThunk(
//     'item/addItem',
//     async (payload, {idk}) => {
//         try{

//         }
//     }
// )
