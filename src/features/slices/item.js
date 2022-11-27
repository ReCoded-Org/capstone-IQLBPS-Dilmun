import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { filter } from 'lodash';
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import moment from 'moment';
import { db, storage } from '../../firebase-config';

export const uploadImageItem = createAsyncThunk(
  'item/uploadImageItem',
  async (file) => {
    try {
      const storageRef = ref(storage, 'gs://capstone-dilmun.appspot.com');
      const fileRef = ref(storageRef, `images/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (error) {
      return error.message;
    }
  }
);

// ADD ITEM to DB and to state (userItems)
export const addItem = createAsyncThunk(
  'item/addItem',
  async (payload) => {
    try {
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
      // add item to user collection as subcollection
      const docRef = await addDoc(collection(db, 'Items'), data);
      await setDoc(doc(db, 'Users', owner.uid, 'Items', docRef.id), data);
      return true;
    } catch (error) {
      return error.message;
    }
  }
);

// GET User's Items from DB and save to state
export const getUserItems = createAsyncThunk(
  'item/getUserItems',
  async (uid) => {
    try {
      const items = [];
      const querySnapshot = await getDocs(collection(db, 'Users', uid, 'Items'));
      querySnapshot.forEach((item) => {
        items.push({ id: item.id, title: item.data().title, file: item.data().file, price: item.data().price, description: item.data().description, categories: item.data().category, type: item.data().type });
      });
      return items;
    } catch (error) {
      return error.message;
    }
  }
);


export const getItemList = createAsyncThunk(
  'item/getItemList', async () => {
    try {
      const docRef = collection(db, 'Items');
      const docSnap = await getDocs(docRef);
      const itemData = docSnap.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      return itemData;
    } catch (error) {
      return error.message
    }
  }
)

export const deleteItem = createAsyncThunk(
  'item/deleteItem', async (payload) => {
    await deleteDoc(doc(db, "Items", payload.itemId));
    await deleteDoc(doc(db, 'Users', payload.userId, 'Items', payload.itemId))
    return payload.itemId
  }
)

const initialState = {
  isItemLoading: false,
  isUserItemsLoading: false,
  getItemListStatus: 'idle',
  addItemStatus: 'idle',
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
  extraReducers: (builder) => {
    builder.addCase(addItem.pending, (state) => {
      state.addItemStatus = 'loading';
      state.error = null;
      state.isItemLoading = true;
      state.item = {};
    })
      .addCase(addItem.fulfilled, (state, action) => {
        state.addItemStatus = "success";
        state.error = null;
        state.isItemLoading = false;
        state.item = action.payload;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.addItemStatus = "failed";
        state.error = action.payload;
        state.isItemLoading = false;
        state.item = {};
      })

      // GETITEMLIST
      .addCase(getItemList.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.isLoading = true;
        state.itemList = [];
      })
      .addCase(getItemList.fulfilled, (state, action) => {
        state.status = "success";
        state.error = null;
        state.isLoading = false;
        state.itemList = action.payload;
      })
      .addCase(getItemList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isLoading = false;
        state.itemList = [];
      })

      // GETUSERITEMS
      .addCase(getUserItems.fulfilled, (state, action) => {
        state.getItemListStatus = "success";
        state.error = null;
        state.isUserItemsLoading = false;
        state.userItems = action.payload;
      })
      .addCase(getUserItems.rejected, (state, action) => {
        state.getItemListStatus = "failed";
        state.error = action.payload;
        state.isUserItemsLoading = false;
        state.userItems = [];
      })
      .addCase(getUserItems.pending, (state) => {
        state.getItemListStatus = "loading";
        state.error = null;
        state.isUserItemsLoading = true;
        state.userItems = [];
      })

      // DELTEITEM
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.error = null
        state.userItems = filter(state.userItems, (c) => c.id !== action.payload);
      })
  }
});

// Reducer
export default itemSlice.reducer;

// Actions

// Upload Image Item to Firebase Storage
export const itemList = (state) => state.item.itemList
