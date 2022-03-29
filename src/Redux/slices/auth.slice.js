import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authService} from '../../services';

const initialState = {
    isFirstEntry: null,
    uid: null,
    isLoading: false,
    error: null
};

export const getUidThunk = createAsyncThunk(
    'authSlice/getUidThunk',
    async (pinCode, {_, rejectWithValue}) => {
        try {
            return await authService.getUid(pinCode);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getFirsEntryThunk = createAsyncThunk(
    'authSlice/getFirsEntryThunk',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const isEntry = await AsyncStorage.getItem('firstEnter');
            dispatch(setFirsEntry({isEntry}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const setFirsEntryThunk = createAsyncThunk(
    'authSlice/setFirsEntryThunk',
    async (_, {rejectWithValue}) => {
        try {
            await AsyncStorage.setItem('firstEnter', 'true');
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setFirsEntry: (state, action) => {
            const {isEntry} = action.payload;
            state.isFirstEntry = Boolean(isEntry);
        },
    },
    extraReducers: {
        [getUidThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getUidThunk.fulfilled]: (state, action) => {
            state.uid = action.payload;
            state.isLoading = false;
        },
        [getUidThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});


const authReducer = authSlice.reducer;
export const {
    setFirsEntry
} = authSlice.actions;
export default authReducer;
