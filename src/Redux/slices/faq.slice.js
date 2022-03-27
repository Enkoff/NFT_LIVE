import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {faqService} from '../../services';

const initialState = {
    faq:[],
    isLoading: false,
    error: null
};

export const getFaqThunk = createAsyncThunk(
    'faqSlice/getFaqThunk',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            return await faqService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const faqSlice = createSlice({
    name: 'faqSlice',
    initialState,
    extraReducers: {
        [getFaqThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getFaqThunk.fulfilled]: (state, action) => {
            state.faq = action.payload;
            state.isLoading = false;
        },
        [getFaqThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const faqReducer = faqSlice.reducer;
export default faqReducer;