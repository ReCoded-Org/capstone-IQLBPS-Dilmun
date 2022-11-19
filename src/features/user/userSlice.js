// import { async } from '@firebase/util';
import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import {
  auth,
  db
} from '../../firebase-config';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};



export const signInWithGoogle = createAsyncThunk(
  'user/signInWithGoogle',
  async (
    payload, {
      rejectWithValue
    }
  ) => {
    const provider = new GoogleAuthProvider();
    try {
      const {
        user
      } = await signInWithPopup(auth, provider);

      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          firstName: user.displayName.split(' ')[0],
          lastName: user.displayName.split(' ')[1],
          email: user.email,
        });
      }
      payload();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
    }
)
export const Signout = createAsyncThunk(
  'user/signout',
  async (payload, { rejectWithValue }) => {
    try {
      return signOut(auth);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);


export const signInWithFacebook = createAsyncThunk(
  'user/signInWithFacebook',
  async (payload, {
    rejectWithValue
  }) => {
    const provider = new FacebookAuthProvider();
    try {
      const {
        user
      } = await signInWithPopup(auth, provider);

      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          firstName: user.displayName.split(' ')[0],
          lastName: user.displayName.split(' ')[1],
          email: user.email,
        });
      }
      payload();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);

export const signUpWithCredentials = createAsyncThunk(
  'user/signUpWithCredentials',
  async (payload, {
    rejectWithValue
  }) => {
    const {
      email,
      password,
      firstName,
      lastName,
      callback
    } = payload;

    try {
      const {
        user
      } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await setDoc(doc(db, 'Users', user.uid), {
        firstName,
        lastName,
        email,
      });

      callback();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);
export const signInWithCredentials = createAsyncThunk(
  'user/signInWithCredentials',
  async (payload, {
    rejectWithValue
  }) => {
    const {
      email,
      password,
      callback
    } = payload;
    try {
      const {
        user
      } = await signInWithEmailAndPassword(auth, email, password);
      callback();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);
export const getCurrentSignedInUser = createAsyncThunk(
  'user/getCurrentSignedInUser',
  async (payload, {
    rejectWithValue
  }) => {
    try {
      const docRef = doc(db, 'Users', payload.id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return rejectWithValue(JSON.stringify('no user found'));
      }
      return JSON.stringify(payload.user);
      // return JSON.stringify(docSnap.data());
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = {};
      state.status = 'idle';
      state.error = null;
    },

    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // SignIn with Facebook
      .addCase(signInWithFacebook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(signInWithFacebook.fulfilled, (state, {
        payload
      }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(signInWithFacebook.rejected, (state, {
        payload
      }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      })
      // SignIn with Google
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(signInWithGoogle.fulfilled, (state, {
        payload
      }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(signInWithGoogle.rejected, (state, {
        payload
      }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      })
      // SignIn with Credentials
      .addCase(signInWithCredentials.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(signInWithCredentials.fulfilled, (state, {
        payload
      }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(signInWithCredentials.rejected, (state, {
        payload
      }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      })
      // SignUp with Credentials
      .addCase(signUpWithCredentials.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(signUpWithCredentials.fulfilled, (state, {
        payload
      }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(signUpWithCredentials.rejected, (state, {
        payload
      }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      })
      // getCurrentSignedInUser
      .addCase(getCurrentSignedInUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(getCurrentSignedInUser.fulfilled, (state, {
        payload
      }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(getCurrentSignedInUser.rejected, (state, {
        payload
      }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      })
      .addCase(Signout.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(Signout.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = {};
      })
      .addCase(Signout.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
      });
  },
});

export const user = (state) => state.user.user;
export const status = (state) => state.user.status;
export const error = (state) => state.user.error;
export const { resetState, updateUser } = userSlice.actions;
export default userSlice.reducer;
