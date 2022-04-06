import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../../services';
import {createSubscriptionsObjects} from '../../config';

const initialState = {
    user: {
        id: '',
        name: '',
        nikName: '',
        email: '',
        bio: '',
        avatarUrl: null,
        oldAvatarFileName: '',
        avatarBackground: '',
        gallery: [],
        pushMessages: [],
        collectionsNames: [],
        subscriptions: [],
        followers: [],
    },
    isLoading: false,
    error: null,
    notificationBadge: null,
    chatsBadge: null
};

export const getUserByUidThunk = createAsyncThunk(
    'userSlice/getUserByUidThunk',
    async ({uid}, {rejectWithValue}) => {
        try {
            const user = await userService.getUserByUid({uid});
            const userGallery = await userService.getUserGalleryByUid({uid});
            return {user, userGallery};
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
export const updateUserByUidAndFieldsKeysThunk = createAsyncThunk(
    'userSlice/updateUserByUidAndFieldsKeysThunk',
    async ({uid, updateFields, oldAvatarFileName = null, isUploadAvatar = false}, {dispatch, rejectWithValue}) => {
        try {
            if (isUploadAvatar) await userService.deleteStorageImg(oldAvatarFileName);

            dispatch(updateUserByFields({updateFields}));
            await userService.updateUserByUidAndFields({uid, updateFields});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
export const addAndDeleteCollectionNameByUidThunk = createAsyncThunk(
    'userSlice/addAndDeleteCollectionNameByUidThunk',
    async ({uid, collectionObj, isAdd = true}, {dispatch, rejectWithValue}) => {
        try {
            if (isAdd) {
                await userService.addAndDeleteCollectionNameByUid({isAdd, uid, collectionObj});
                dispatch(addAndDeleteCollectionName({isAdd, collectionObj}));
                return;
            }
            await userService.addAndDeleteCollectionNameByUid({isAdd, uid, collectionObj});
            dispatch(addAndDeleteCollectionName({isAdd, collectionObj}));
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
export const updateCollectionNameByUidAndItemIdThunk = createAsyncThunk(
    'userSlice/updateCollectionNameByUidAndItemIdThunk',
    async ({uid, collectionId, newName, oldCollectionName}, {dispatch, rejectWithValue}) => {
        try {
            await userService.updateCollectionName({uid, collectionId, newName});
            dispatch(updateUserCollectionName({collectionId, newName}));
            dispatch(updateGalleryItemByCollectionName({oldCollectionName, newName}));
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const followUnfollowThunk = createAsyncThunk(
    'userSlice/followUnfollowThunk',
    async ({user, followUser, isFollow}, {dispatch, rejectWithValue}) => {
        try {
            const {userObj, followUserObj} = createSubscriptionsObjects(user, followUser);

            if (isFollow) {
                dispatch(deleteSubscriptions({followUserId: followUser.followUserId}));
                await userService.unfollow({userObj, followUserObj});
                return;
            }

            dispatch(addSubscriptions({followUserObj}));
            await userService.follow({userObj, followUserObj});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const setShowMessageThunk = createAsyncThunk(
    'userSlice/setShowMessageThunk',
    async ({uid, chatCompanionId}, {rejectWithValue}) => {
        try {
            await userService.setShowMessage(uid, chatCompanionId);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const addChatMessageThunk = createAsyncThunk(
    'userSlice/addChatMessageThunk',
    async ({uid, chatCompanionId, newMessage}, {rejectWithValue}) => {
        try {
            await userService.addChatMessage({uid, chatCompanionId, newMessage});
        } catch (e) {
            const errorCode = 'firestore/not-found';
            if (e.code === errorCode) {
               await userService.addChat({uid, chatCompanionId, newMessage});
            }
            return rejectWithValue(e.message);
        }
    }
);

export const deletePushNotificationThunk = createAsyncThunk(
    'userSlice/deletePushNotificationThunk',
    async ({pushId}, {rejectWithValue}) => {
        try {
            await userService.deletePushNotificationByPushId({pushId});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);

export const deletePushNotificationBadgeThunk = createAsyncThunk(
    'userSlice/deletePushNotificationBadgeThunk',
    async ({uid}, {rejectWithValue}) => {
        try {
            await userService.deleteMessageBadge({uid});
            // await userService.deletePushNotificationByPushId({pushId});
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);




const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addGalleryItem: (state, action) => {
            const {galleryItem} = action.payload;

            state.user.gallery.unshift(galleryItem);
        },
        addSubscriptions: (state, action) => {
            const {followUserObj,} = action.payload;

            state.user.subscriptions.push(followUserObj);
        },
        addAndDeleteCollectionName: (state, action) => {
            const {isAdd, collectionObj} = action.payload;

            if (isAdd) {
                state.user.collectionsNames.push(collectionObj);
                return;
            }
            state.user.collectionsNames = state.user.collectionsNames.filter(item => item.id !== collectionObj.id);
        },
        addGalleryItemRetweetByItemId: (state, action) => {
            const {itemId} = action.payload;

            const index = state.user.gallery.findIndex(item => item.id === itemId);
            state.user.gallery[index].retweets += 1;
        },
        addAndDeleteLikeByGalleryItemId: (state, action) => {
            const {isAdd, itemId, uid} = action.payload;

            const index = state.user.gallery.findIndex(item => item.id === itemId);
            isAdd
                ? state.user.gallery[index].likes.push(uid)
                : state.user.gallery[index].likes = state.user.gallery[index].likes.filter(item => item !== uid);
        },
        updateUserByFields: (state, action) => {
            const {updateFields} = action.payload;

            for (const key in updateFields) {
                state.user[key] = updateFields[key];
            }
        },
        updateUserCollectionName: (state, action) => {
            const {collectionId, newName} = action.payload;

            const itemIndex = state.user.collectionsNames.findIndex(item => item.id === collectionId);
            state.user.collectionsNames[itemIndex].collectionName = newName;
        },
        updateGalleryItemByFields: (state, action) => {
            const {updateFields} = action.payload;

            state.user.gallery.map(item => {
                for (const key in updateFields) {
                    item[key] = updateFields[key];
                }
                return item;
            });
        },
        updateGalleryItemByCollectionName: (state, action) => {
            const {oldCollectionName, newName} = action.payload;

            state.user.gallery.map(item => {
                if (item.collectionName === oldCollectionName) {
                    item.collectionName = newName;
                    return item;
                }
                return item;
            });
        },
        updateGalleryItemByItemId: (state, action) => {
            const {itemId, updateFields} = action.payload;

            const index = state.user.gallery.findIndex(item => item.id === itemId);
            for (const key in updateFields) {
                state.user.gallery[index][key] = updateFields[key];
            }
        },
        deleteGalleryItemByItemId: (state, action) => {
            const {itemId} = action.payload;

            state.user.gallery = state.user.gallery.filter(item => item.id !== itemId);
        },
        deleteSubscriptions: (state, action) => {
            const {followUserId} = action.payload;

            state.user.subscriptions = state.user.subscriptions.filter(item => item.id !== followUserId);
        },
    },
    extraReducers: {
        [getUserByUidThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [getUserByUidThunk.fulfilled]: (state, action) => {
            const {user, userGallery} = action.payload;
            state.user = user;
            state.user.gallery = userGallery;
            state.isLoading = false;
        },
        [getUserByUidThunk.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;
export const {
    addGalleryItem,
    addSubscriptions,
    addAndDeleteLikeByGalleryItemId,
    addGalleryItemRetweetByItemId,
    addAndDeleteCollectionName,
    updateUserByFields,
    updateUserCollectionName,
    updateGalleryItemByFields,
    updateGalleryItemByCollectionName,
    updateGalleryItemByItemId,
    deleteGalleryItemByItemId,
    deleteSubscriptions
} = userSlice.actions;
export default userReducer;
