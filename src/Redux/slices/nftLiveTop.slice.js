import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {nftLiveTopService} from '../../services';

const initialState = {
    nftLiveTop: [],
    isLoading: false,
    error: null
};
// export const getNftLiveTopByLimitThunk = createAsyncThunk(
//     'nftLiveTopSlice/getNftLiveTopByLimitThunk',
//     async ({limit}, {rejectWithValue}) => {
//         try {
//             return await nftLiveTopService.getNftLiveTopByLimit(limit);
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );
export const getNftLiveTopByStartAfterThunk = createAsyncThunk(
    'nftLiveTopSlice/getNftLiveTopByStartAfterThunk',
    async ({startAfter, limit, callback}, {dispatch, rejectWithValue}) => {
        try {
            const data = await nftLiveTopService.getNftLiveTopByStartAfter(startAfter, limit, callback);
            dispatch(getNftLiveTopByStartAfter({data}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addRetweetsNftLiveTopItemThunk = createAsyncThunk(
    'nftLiveTopSlice/addShareNftLiveTopThunk',
    async ({itemId}, {dispatch, rejectWithValue}) => {
        try {
            await nftLiveTopService.addRetweetsGalleryItem(itemId);
            dispatch(addRetweetsNftLiveTopItem({itemId}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addAndDeleteNftTopItemThunk = createAsyncThunk(
    'nftLiveTopSlice/addAndDeleteNftTopItemThunk',
    async ({galleryItem, isAdd = true}, {dispatch, rejectWithValue}) => {
        try {
            await nftLiveTopService.addAndDeleteGalleryItem(galleryItem, isAdd);
            dispatch(addAndDeleteNftTopItem({galleryItem, isAdd}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addAndDeleteNftLiveTopItemLikeThunk = createAsyncThunk(
    'nftLiveTopSlice/addAndDeleteNftLiveTopItemLikeThunk',
    async ({itemId, userId, isAdd = true}, {dispatch, rejectWithValue}) => {
        try {
            await nftLiveTopService.addAndDeleteGalleryItemLike(itemId, userId, isAdd);
            dispatch(addAndDeleteNftLiveTopItemLike({itemId, userId, isAdd}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
export const updateNftLiveTopItemByAuthorIdThunk = createAsyncThunk(
    'nftLiveTopSlice/updateAllNftLiveTopItemThunk',
    async ({authorId, fields}, {dispatch, rejectWithValue}) => {
        try {
            await nftLiveTopService.updateNftLiveTopItemByAuthorId(authorId, fields);
            dispatch(updateNftLiveTopItemByAuthorId({authorId, fields}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const nftLiveTopSlice = createSlice({
    name: 'nftLiveTopSlice',
    initialState,
    reducers: {
        getNftLiveTopByStartAfter: (state, action) => {
            const {data} = action.payload;

            state.nftLiveTop = [...state.nftLiveTop, ...data];
        },
        updateNftLive: (state, action) => {
            state.nftLiveTop = action.payload.updateNftLiveTop;
        },
        addAndDeleteNftTopItem: (state, action) => {
            const {galleryItem, isAdd} = action.payload;

            if (isAdd) {
                state.nftLiveTop.push(galleryItem);
            } else {
                state.nftLiveTop = state.nftLiveTop.filter(item => item.id !== galleryItem.id);
            }
        },
        addAndDeleteNftLiveTopItemLike: (state, {payload: {itemId, userId, isAdd}}) => {
            const itemIndex = state.nftLiveTop.findIndex(item => item.id === itemId);
            if (isAdd) {
                state.nftLiveTop[itemIndex].likes.push(userId);
                return;
            }
            state.nftLiveTop[itemIndex].likes = state.nftLiveTop[itemIndex].likes.filter(item => item !== userId);
        },
        addRetweetsNftLiveTopItem: (state, action) => {
            const {itemId} = action.payload;

            const itemIndex = state.nftLiveTop.findIndex(item => item.id === itemId);
            state.nftLiveTop[itemIndex].retweets += 1;
        },
        updateNftLiveTopItemByAuthorId: (state, {payload: {authorId, fields}}) => {
            state.nftLiveTop.map(item => {
                for (const key in fields) {
                    if (item.authorId === authorId) {
                        item[key] = fields[key];
                    }
                }
                return item;
            });
        }
    },
    // extraReducers: {
    //     [getNftLiveTopByLimitThunk.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [getNftLiveTopByLimitThunk.fulfilled]: (state, action) => {
    //         state.nftLiveTop = action.payload;
    //         state.isLoading = false;
    //     },
    //     [getNftLiveTopByLimitThunk.rejected]: (state, action) => {
    //         state.error = action.payload;
    //     }
    // }
});

const nftLiveTopReducer = nftLiveTopSlice.reducer;
export const {
    getNftLiveTopByStartAfter,
    addAndDeleteNftTopItem,
    addAndDeleteNftLiveTopItemLike,
    addRetweetsNftLiveTopItem,
    updateNftLiveTopItemByAuthorId
} = nftLiveTopSlice.actions;
export default nftLiveTopReducer;
