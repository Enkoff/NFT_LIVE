import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {onboardingService} from '../../services';

const initialState = {
    onboarding: [],
    isLoading: false,
    error: null
};

export const getOnboardingThunk = createAsyncThunk(
    'onboardingSlice/getOnboardingThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await onboardingService.get;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const onboardingSlice = createSlice({
    name: 'onboardingSlice',
    initialState,
    extraReducers: {
        [getOnboardingThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getOnboardingThunk.fulfilled]: (state, action) => {
            state.onboarding = action.payload;
            state.isLoading = false;
        },
        [getOnboardingThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const onboardingReducer = onboardingSlice.reducer;
export default onboardingReducer;
