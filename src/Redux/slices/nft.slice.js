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
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const updateNftNikNamesByUserUidThunk = createAsyncThunk(
    'nftSlice/updateNftNikNamesByUserUidThunk',
    async ({uid, nikName}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(updateNftNikNamesByAuthorId({nikName}));
            await nftService.updateNftNikNamesByUid(uid, nikName);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

const nftSlice = createSlice({
    name: 'nftSlice',
    initialState,
    reducers: {
        updateNftNikNamesByAuthorId: (state, action) => {
            const {authorId, nikName} = action.payload;

            state.nftLiveTop.map(nft => {
                if (nft.authorId === authorId) {
                    nft.authorNikName = nikName;
                    return nft;
                }
                return nft;
            });
        },
    },
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
export const {
    updateNftNikNamesByAuthorId
} = nftSlice.actions;
export default nftReducer;
