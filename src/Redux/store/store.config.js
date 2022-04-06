import {configureStore} from '@reduxjs/toolkit';

import {
    authReducer,
    avatarCarouselReducer,
    nftReducer,
    onboardingReducer,
    userReducer,
    faqReducer,
    publishReducer,
} from '../slices';

const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
        avatar: avatarCarouselReducer,
        user: userReducer,
        auth: authReducer,
        faq: faqReducer,
        publish: publishReducer,
        nft: nftReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;
