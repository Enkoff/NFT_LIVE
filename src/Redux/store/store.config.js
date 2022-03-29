import {configureStore} from '@reduxjs/toolkit';

import {
    authReducer,
    avatarCarouselReducer,
    nftReducer,
    nftLiveTopReducer,
    onboardingReducer,
    userReducer,
    faqReducer,
    publishReducer
} from '../slices';

const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
        avatar: avatarCarouselReducer,
        user: userReducer,
        auth: authReducer,
        nftLiveTop: nftLiveTopReducer,
        faq: faqReducer,
        publish: publishReducer,
        nft: nftReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;
