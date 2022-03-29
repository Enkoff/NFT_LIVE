import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {nftService} from '../../services/nft.service';

const initialState = {
    nftLiveTop: [],
    isLoading: false,
    error: null
};

export const getNftLiveTopThunk = createAsyncThunk(
    'nftSlice/getNftLiveTopThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await nftService.getNftLiveTop();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);








const nftSlice = createSlice({
    name: 'nftSlice',
    initialState,
    extraReducers: {
        [getNftLiveTopThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getNftLiveTopThunk.fulfilled]: (state, action) => {
            state.nftLiveTop = action.payload;
            state.isLoading = false;
        },
        [getNftLiveTopThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const nftReducer = nftSlice.reducer;
export default nftReducer;
