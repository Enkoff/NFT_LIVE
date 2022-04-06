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

export const addNftThunk = createAsyncThunk(
    'nftSlice/addNftThunk',
    async ({galleryItem, isNftLiveTop}, {dispatch, rejectWithValue}) => {
        try {
            await nftService.addNft({galleryItem});
            dispatch(addNft({galleryItem, isNftLiveTop}));
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const addAndDeleteLikeThunkByNftId = createAsyncThunk(
    'nftSlice/addAndDeleteLikeThunkByNftId',
    async ({isAdd, itemId, uid}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(addAndDeleteNftLike({isAdd, itemId, uid}));
            await nftService.addAndDeleteLike({isAdd, itemId, uid});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const addNftRetweetByNftIdThunk = createAsyncThunk(
    'nftSlice/addNftRetweetThunk',
    async ({nftId}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(addNftRetweetByNftId({nftId}));
            await nftService.addRetweetByNftId({nftId});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const updateNftByAuthorIdAndFieldsKeyThunk = createAsyncThunk(
    'nftSlice/updateNftByAuthorIdAndFieldsKeyThunk',
    async ({uid, updateFields}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(updateNftByAuthorIdAndFieldsKey({uid, updateFields}));
            await nftService.updateNftByAuthorIdAndFieldsKey({uid, updateFields});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const updateNftByNftIdThunk = createAsyncThunk(
    'nftSlice/updateNftByNftIdThunk',
    async ({nftId, updateFields}, {rejectWithValue}) => {
        try {
            await nftService.updateNftByNftId({nftId, updateFields});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const updateNftByCollectionNameThunk = createAsyncThunk(
    'nftSlice/updateNftByCollectionNameThunk',
    async ({uid, oldCollectionName, newName}, {dispatch, rejectWithValue}) => {
        try {
            await nftService.updateNftByCollectionName({uid, oldCollectionName, newName});
            dispatch(updateNftByCollectionName({oldCollectionName, newName}));
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const deleteNft = createAsyncThunk(
    'nftSlice/deleteNft',
    async ({itemId, nftFirebasePath}, {dispatch, rejectWithValue}) => {
        try {
            await nftService.deleteNftImgByStoragePath(nftFirebasePath);
            await nftService.deleteNftByDocId({itemId});
            await dispatch(deleteNftByItemId({itemId}));
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
        addNft: (state, action) => {
            const {galleryItem, isNftLiveTop} = action.payload;

            if (isNftLiveTop) state.nftLiveTop.push(galleryItem);
        },
        addAndDeleteNftLike: (state, action) => {
            const {isAdd, itemId, uid} = action.payload;

            const index = state.nftLiveTop.findIndex(item => item.id === itemId);
            isAdd
                ? state.nftLiveTop[index].likes.push(uid)
                : state.nftLiveTop[index].likes = state.nftLiveTop[index].likes.filter(item => item !== uid);
        },
        addNftRetweetByNftId: (state, action) => {
            const {nftId} = action.payload;

            const index = state.nftLiveTop.findIndex(item => item.id === nftId);
            state.nftLiveTop[index].retweets += 1;
        },
        updateNftByAuthorIdAndFieldsKey: (state, action) => {
            const {uid, updateFields} = action.payload;

            state.nftLiveTop.map(nft => {
                if (nft.authorId === uid) {
                    for (const key in updateFields) {
                        nft[key] = updateFields[key];
                    }
                    return nft;
                }
                return nft;
            });
        },
        updateNftByCollectionName: (state, action) => {
            const {oldCollectionName, newName} = action.payload;

            state.nftLiveTop.map(item => {
                if (item.collectionName === oldCollectionName) {
                    item.collectionName = newName;
                    return item;
                }
                return item;
            });
        },
        deleteNftByItemId: (state, action) => {
            const {itemId} = action.payload;

            state.nftLiveTop = state.nftLiveTop.filter(item => item.id !== itemId);
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
    addNft,
    addAndDeleteNftLike,
    addNftRetweetByNftId,
    updateNftByAuthorIdAndFieldsKey,
    updateNftByCollectionName,
    deleteNftByItemId
} = nftSlice.actions;
export default nftReducer;
