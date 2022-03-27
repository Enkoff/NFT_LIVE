import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {publishService} from '../../services';

const initialState = {
    publish: [],
    centerItem: null,
    isLoading: false,
    error: null
};

export const getPublishThunk = createAsyncThunk(
    'publishSlice/getPublishThunk',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const publish = await publishService.getAll;
            dispatch(setCenterItem({publishLength: publish.length}));
            return publish;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const publishSlice = createSlice({
    name: 'publishSlice',
    initialState,
    reducers: {
        setCenterItem: (state, action) => {
            state.centerItem = Math.ceil(action.payload.publishLength / 2) - 1;
        }
    },
    extraReducers: {
        [getPublishThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getPublishThunk.fulfilled]: (state, action) => {
            state.publish = action.payload;
            state.isLoading = false;
        },
        [getPublishThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const publishReducer = publishSlice.reducer;
export const {
    setCenterItem
} = publishSlice.actions;
export default publishReducer;