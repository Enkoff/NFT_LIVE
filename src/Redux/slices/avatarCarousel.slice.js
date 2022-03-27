import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {avatarsBgColorsService, avatarsService} from '../../services';
import {THEME} from '../../constants';

const initialState = {
    avatars: [],
    bgColors: [],
    currentAvatarId: null,
    uploadImage: null,
    isLoading: false,
    centerItem: null,
    error: null
};

export const getAvatarsAndBgColorsThunk = createAsyncThunk(
    'avatarCarouselSlice/getAvatarsAndBgColorsThunk',
    async (_, {rejectWithValue}) => {
        try {
            let avatars = await avatarsService.getAll;

            const girlsArray = avatars.filter(item => item['sex'] === 'girl');
            const boyArray = avatars.filter(item => item['sex'] === 'boy');
            const upload = avatars.find(item => item.id === 'upload');

            avatars = [...girlsArray, upload, ...boyArray];

            const centerItem = avatars.findIndex(avatar => avatar.id === 'upload');

            const bgColors = await avatarsBgColorsService.getAll;
            return {avatars, bgColors, centerItem};
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const avatarCarouselSlice = createSlice({
    name: 'avatarCarouselSlice',
    initialState,
    reducers: {
        addUploadImage: (state, action) => {
            const {uploadImagePath} = action.payload;
            state.uploadImage = uploadImagePath;
        },
        deleteUploadImage: (state, action) => {
            state.uploadImage = null;
        },
        changeAvatarColor: (state, action) => {
            const avatarIndex = state.avatars.findIndex(avatar => avatar.id === state.currentAvatarId);
            state.avatars[avatarIndex].initialBg = action.payload.color;
        },
        setCurrentAvatarId: (state, action) => {
            state.currentAvatarId = action.payload.id;
        }
    },
    extraReducers: {
        [getAvatarsAndBgColorsThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getAvatarsAndBgColorsThunk.fulfilled]: (state, action) => {
            state.avatars = action.payload.avatars;
            state.bgColors = action.payload.bgColors;
            state.centerItem = action.payload.centerItem;
            state.isLoading = false;
        },
        [getAvatarsAndBgColorsThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const avatarCarouselReducer = avatarCarouselSlice.reducer;
export const {
    addUploadImage,
    deleteUploadImage,
    changeAvatarColor,
    setCurrentAvatarId
} = avatarCarouselSlice.actions;
export default avatarCarouselReducer;