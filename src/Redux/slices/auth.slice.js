import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authService, onboardingService} from '../../services';

const initialState = {
    uid: null,
    isLoading: false,
    error: null
};

export const getUidThunk = createAsyncThunk(
    'authSlice/getUidThunk',
    async (pinCode, {dispatch, rejectWithValue}) => {
        try {
            return await authService.getUid(pinCode);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
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
export default authReducer;