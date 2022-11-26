import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import moment from 'moment';
import { db, storage } from '../../firebase-config';
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
  },
  extraReducers:(builder) => {
    builder.addCase(addItem.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      state.item = {};
    })
    .addCase(addItem.fulfilled, (state) => {
      state.status = "success";
      state.error= null;
      //maybe parse it to JSON
      state.item = action.payload;
    })
    .addCase(addItem.rejected, (state) => {
      state.status= "failed";
      state.error = action.payload;
      state.item = {};
    })

    //GETITEMLIST
    .addCase(getItemList.pending, (state) => {
      state.status= "loading";
      state.error = null;
      state.itemList = [];
    })
    .addCase(getItemList.fulfilled, (state) => {
      state.status= "success";
      state.error = null;
      state.itemList = action.payload;
    })
    .addCase(getItemList.rejected, (state) => {
      state.status= "failed";
      state.error = action.payload;
      state.itemList = [];
    })

    //GETUSERITEMS
    .addCase(getUserItems.fulfilled, (state) => {
      state.status= "success";
      state.error = null;
      state.itemList = action.payload;
    })
    .addCase(getUserItems.rejected, (state) => {
      state.status= "failed";
      state.error = action.payload;
      state.itemList = [];
    })
    .addCase(getUserItems.pending, (state) => {
      state.status= "loading";
      state.error = null;
      state.itemList = [];
    })
  }
});

// Reducer
export default itemSlice.reducer;

// Actions

// Upload Image Item to Firebase Storage
export const uploadImageItem = createAsyncThunk(
  'item/uploadImageItem',
  async (file, { rejectWithValue }) => {
    try {
      dispatch(itemSlice.actions.startLoading());
      const storageRef = ref(storage, 'gs://capstone-dilmun.appspot.com');
      const fileRef = ref(storageRef, `images/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
        createdAt: moment().format('LLL'),
        updatedAt: moment().format('LLL'),
      };
      const docRef = await addDoc(collection(db, 'Items'), data);
      // add item to user collection as subcollection
      await setDoc(doc(db, 'Users', owner.uid, 'Items', docRef.id), data);
      // save item to state
      dispatch(itemSlice.actions.getItemSuccess({ ...item, file }));
      // save item to userItems
      dispatch(itemSlice.actions.getUserItemsSuccess({ ...item, file }));
      return JSON.stringify({ ...payload, id: docRef.id });
    } catch (error) {
      dispatch(itemSlice.actions.HasError(error));
      return rejectWithValue(error);
    }
  }
);

// GET User's Items from DB and save to state
export const getUserItems = createAsyncThunk(
  'item/getUserItems',
  async (uid, { rejectWithValue }) => {
    try {
      dispatch(itemSlice.actions.startLoading());
      const items = [];
      const querySnapshot = await getDocs(collection(db, 'Users', uid, 'Items'));
      querySnapshot.forEach((item) => {
        items.push({ id: item.id, title: item.data().title, file: item.data().file, price: item.data().price, description: item.data().description, categories: item.data().category, type: item.data().type });
      });
      dispatch(itemSlice.actions.getUserItemsSuccess(items));
      return items;
    } catch (error) {
      dispatch(itemSlice.actions.HasError(error));
      return rejectWithValue(error);
    }
  }
);


export const getItemList = createAsyncThunk(
  'item/getItemList', async (payload, { rejectWithValue }) => {
    try {
        const docRef = collection(db, 'Items');
        const docSnap = await getDocs(docRef);
        const itemData = docSnap.docs.map((d) => {
          return { ...d.data(), id: d.id };
        });
        await dispatch(itemSlice.actions.getItemListSuccess(itemData));
        return itemData;
    } catch (error) {
      dispatch(itemSlice.actions.HasError(error))
      return rejectWithValue(error)
    }
  }
  )
  
  export const itemList = (state) => state.item.itemList
