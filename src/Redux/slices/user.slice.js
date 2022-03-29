import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {userService} from '../../services';
import {addAvatarToFirebaseStorage} from '../../config/firebase';
import {collectionNameModel} from '../../model';
import {subscriptionsAndSubscribersModel} from '../../model/subscriptionsAndSubscribersModel/subscriptionsAndSubscribersModel';

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
    'userSlice/getUserByIdThunk',
    async (uid, {rejectWithValue}) => {
        try {
            const user = await userService.getUserByUid(uid);
            const userGallery = await userService.getUserGalleryById(uid);
            return {user, userGallery};
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
export const updateUserInfoByUidThunk = createAsyncThunk(
    'userSlice/updateUserInfoByUidThunk',
    async ({uid, fields, isNikNameUpdate}, {dispatch, rejectWithValue}) => {
        try {
            await userService.updateUserInfoByUid(uid, fields);
            dispatch(updateUserInfo({fields}));
            isNikNameUpdate && dispatch(updateGalleryItemNikName({fields}));
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
export const updateUserAvatarByUidThunk = createAsyncThunk(
    'userSlice/updateUserAvatarByUidThunk',
    async ({uid,}, {dispatch, rejectWithValue}) => {
        try {
            // if (!isCarouselAvatar) {
                // if (oldAvatarFileName) await userService.deleteStorageImg(oldAvatarFileName);
                //
                // const {storageImgURL, imgStoragePath} = await addAvatarToFirebaseStorage(uid, imgURL);
                // await userService.updateAvatarAndAvatarStoragePath(uid, initialBg, storageImgURL, imgStoragePath);
                //
                // dispatch(updateUserAvatar({initialBg, imgURL: storageImgURL, oldAvatarFileName: imgStoragePath}));
                // return storageImgURL;
            // } else {
                // await userService.updateUserAvatarAndBgColor(uid, initialBg, imgURL);
                //
                // dispatch(updateUserAvatar({initialBg, imgURL, oldAvatarFileName}));
            // }
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message);
        }
    }
);
//////////////////////////////////////////////////////////////////////////////////////////////////////
// export const addAndDeleteGalleryItemThunk = createAsyncThunk(
//     'userSlice/addAndDeleteGalleryItemThunk',
//     async ({uid, galleryItem, isAdd = true}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.addAndDeleteGalleryItem(uid, galleryItem, isAdd);
//             if (!isAdd) {
//                 await userService.deleteStorageImg(galleryItem.nftFirebasePath);
//             }
//             dispatch(addAndDeleteGalleryItem({galleryItem, isAdd}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const addAndDeleteLikeThunk = createAsyncThunk(
//     'userSlice/addAndDeleteLikeThunk',
//     async ({itemId, userId, authorId, isAdd = true}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.addAndDeleteGalleryItemLike(itemId, userId, authorId, isAdd);
//             dispatch(addAndDeleteLike({itemId, userId, authorId, isAdd}));
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const addRetweetThunk = createAsyncThunk(
//     'userSlice/addRetweetThunk',
//     async ({authorId, itemId}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.addRetweetsGalleryItem(authorId, itemId);
//             //ЧОМУСЬ ДОДАЄ ДРУШИЙ РЕТВІТ ВИДАЛИТИ
//             dispatch(addRetweet({authorId, itemId}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const updateGalleryItemThunk = createAsyncThunk(
//     'userSlice/updateGalleryItemThunk',
//     async ({uid, itemId, inputs}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.updateGalleryItem(uid, itemId, inputs);
//             dispatch(updateGalleryItem({itemId, inputs}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const updateUserAvatarThunk = createAsyncThunk(
//     'userSlice/updateUserAvatarThunk',
//     async ({uid, initialBg, imgURL, isCarouselAvatar = true, oldAvatarFileName}, {dispatch, rejectWithValue}) => {
//         try {
//             if (!isCarouselAvatar) {
//                 if (oldAvatarFileName) await userService.deleteStorageImg(oldAvatarFileName);
//
//                 const {storageImgURL, imgStoragePath} = await addAvatarToFirebaseStorage(uid, imgURL);
//                 await userService.updateAvatarAndAvatarStoragePath(uid, initialBg, storageImgURL, imgStoragePath);
//
//                 dispatch(updateUserAvatar({initialBg, imgURL: storageImgURL, oldAvatarFileName: imgStoragePath}));
//                 return storageImgURL;
//             } else {
//                 await userService.updateUserAvatarAndBgColor(uid, initialBg, imgURL);
//
//                 dispatch(updateUserAvatar({initialBg, imgURL, oldAvatarFileName}));
//             }
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const updateAllGalleryItemThunk = createAsyncThunk(
//     'userSlice/updateAllGalleryItemThunk',
//     async ({uid, fields}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.updateAllGalleryItem(uid, fields);
//             dispatch(updateAllGalleryItem({fields}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const addAndDeleteCollectionNameThunk = createAsyncThunk(
//     'userSlice/addAndDeleteCollectionNameThunk',
//     async ({uid, collectionNameRemoveObj, collectionName, isAdd = true}, {dispatch, rejectWithValue}) => {
//         try {
//
//             if (isAdd) {
//                 const collectionNameObj = new collectionNameModel({collectionName});
//
//                 await userService.addAndDeleteCollectionName(uid, collectionNameObj, isAdd);
//                 dispatch(addAndDeleteCollectionName({isAdd, collectionNameObj}));
//             } else {
//                 await userService.addAndDeleteCollectionName(uid, collectionNameRemoveObj, isAdd);
//                 dispatch(addAndDeleteCollectionName({isAdd, collectionNameRemoveObj}));
//             }
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const updateCollectionNameThunk = createAsyncThunk(
//     'userSlice/updateCollectionNameThunk',
//     async ({uid, item, newName}, {dispatch, rejectWithValue}) => {
//         try {
//             await userService.updateCollectionName(uid, item, newName);
//             dispatch(updateCollectionName({item, newName}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const followUnfollowThunk = createAsyncThunk(
//     'userSlice/followUnfollowThunk',
//     async ({userId, followUserId, item, user}, {dispatch, rejectWithValue}) => {
//         try {
//             const {
//                 authorAvatar,
//                 avatarUrl,
//                 authorNikName,
//                 nikName,
//                 authorId,
//                 id,
//                 authorBackground,
//                 avatarBackground,
//             } = item;
//
//             const {
//                 id: userId,
//                 nikName: userNikName,
//                 avatarUrl: userAvatar,
//                 avatarBackground: userAvatarBackground
//             } = user;
//
//             const userChatId = `${userId}${followUserId}`;
//             const companionChatId = `${followUserId}${userId}`;
//
//             const followObj = new subscriptionsAndSubscribersModel({
//                 id: authorId || id,
//                 nikName: authorNikName || nikName,
//                 avatarUrl: authorAvatar || avatarUrl,
//                 avatarBackground: authorBackground || avatarBackground,
//                 chatId: companionChatId
//             });
//
//             const userObj = new subscriptionsAndSubscribersModel({
//                 id: userId,
//                 nikName: userNikName,
//                 avatarUrl: userAvatar,
//                 avatarBackground: userAvatarBackground,
//                 chatId: userChatId
//             });
//
//             await userService.followUnfollow(userId, followUserId, followObj, userObj);
//
//             await userService.addChat(userChatId, companionChatId);
//             dispatch(followUnfollow({followUserId, followObj}));
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const deletePushNotificationThunk = createAsyncThunk(
//     'userSlice/deletePushNotificationThunk',
//     async ({uid, pushId}, {rejectWithValue}) => {
//         try {
//             await userService.updateNotificationByUserId(uid, pushId);
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const addChatMessageThunk = createAsyncThunk(
//     'userSlice/addChatMessageThunk',
//     async ({uid, chatCompanionId, newMessage}, {rejectWithValue}) => {
//         try {
//             await userService.addChatMessage(uid, chatCompanionId, newMessage);
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );
// export const setShowMessageThunk = createAsyncThunk(
//     'userSlice/setShowMessageThunk',
//     async ({uid, chatCompanionId}, {rejectWithValue}) => {
//         try {
//             await userService.setShowMessage(uid, chatCompanionId);
//         } catch (e) {
//             console.log(e);
//             return rejectWithValue(e.message);
//         }
//     }
// );

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            const {fields} = action.payload;

            for (const key in fields) {
                state.user[key] = fields[key];
            }
        },
        updateGalleryItemNikName: (state, action) => {
            const {nikName} = action.payload.fields;
            console.log('updateUSerNikName');
            state.user.gallery.map(nft => {
                nft.authorNikName = nikName;
                return nft;
            });
        },
        ///////////////////////////////
        addAndDeleteGalleryItem: (state, action) => {
            const {galleryItem, isAdd} = action.payload;
            if (isAdd) {
                state.user.gallery.push(galleryItem);
            } else {
                state.user.gallery = state.user.gallery.filter(item => item.id !== galleryItem.id);
            }
        },
        addAndDeleteLike: (state, action) => {
            const {itemId, userId, authorId, isAdd} = action.payload;

            if (authorId === state.user.id) {
                const itemIndex = state.user.gallery.findIndex(item => item.id === itemId);
                if (isAdd) {
                    const isLike = state.user.gallery[itemIndex].likes.some(likeId => likeId === userId);
                    !isLike && state.user.gallery[itemIndex].likes.push(userId);
                    return;
                }
                state.user.gallery[itemIndex].likes = state.user.gallery[itemIndex].likes.filter(item => item !== userId);
            }
        },
        addRetweet: (state, action) => {
            const {authorId, itemId} = action.payload;

            if (authorId === state.user.id) {
                const itemIndex = state.user.gallery.findIndex(item => item.id === itemId);
                state.user.gallery[itemIndex].retweets += 1;
            }
        },
        updateGalleryItem: (state, action) => {
            const {itemId, inputs} = action.payload;

            const itemIndex = state.user.gallery.findIndex(item => item.id === itemId);

            for (let input in inputs) {
                state.user.gallery[itemIndex][input] = inputs[input];
            }
        },
        updateAllGalleryItem: (state, {payload: {fields}}) => {
            state.user.gallery.map(item => {
                for (const key in fields) {
                    item[key] = fields[key];
                }
                return item;
            });
        },
        updateUserAvatar: (state, action) => {
            const {initialBg, imgURL, oldAvatarFileName} = action.payload;

            if (oldAvatarFileName) state.user.oldAvatarFileName = oldAvatarFileName;
            state.user.avatarUrl = imgURL;
            state.user.avatarBackground = initialBg;
        },
        addAndDeleteCollectionName: (state, action) => {
            const {isAdd} = action.payload;
            if (isAdd) {
                const {collectionNameObj} = action.payload;
                state.user.collectionsNames.push(collectionNameObj);
            } else {
                const {collectionNameRemoveObj: {id}} = action.payload;
                state.user.collectionsNames = state.user.collectionsNames.filter(item => item.id !== id);
            }
        },
        updateCollectionName: (state, action) => {
            const {item: {id, collectionName}, newName} = action.payload;

            const itemIndex = state.user.collectionsNames.findIndex(item => item.id === id);
            state.user.collectionsNames[itemIndex].collectionName = newName;

            state.user.gallery.map(item => {
                if (item.collectionName === collectionName) {
                    item.collectionName = newName;
                    return item;
                }
                return item;
            });
        },
        followUnfollow: (state, {payload: {followUserId, followObj}}) => {
            const isFollow = state.user.subscriptions.some(item => item.id === followUserId);

            if (isFollow) {
                state.user.subscriptions = state.user.subscriptions.filter(item => item.id !== followUserId);
            } else {
                state.user.subscriptions.push(followObj);
            }
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
    updateUserInfo,
    updateGalleryItemNikName,
    ///////////////


    addAndDeleteGalleryItem,
    addAndDeleteLike,
    addRetweet,
    updateGalleryItem,
    updateUserAvatar,
    addAndDeleteCollectionName,
    updateCollectionName,
    updateAllGalleryItem,
    followUnfollow
} = userSlice.actions;
export default userReducer;
