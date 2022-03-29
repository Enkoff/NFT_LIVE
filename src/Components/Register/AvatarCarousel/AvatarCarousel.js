import React, {useEffect, useCallback} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE} from '../../../constants';
import AvatarCarouselRenderItem from '../AvatarCarouselRenderItem/AvatarCarouselRenderItem';
import {getAvatarsAndBgColorsThunk} from '../../../Redux/slices';

const AvatarCarousel = ({setIsPopup, isPopup, carouselRef, isEditProfile = false}) => {
    const dispatch = useDispatch();

    const {avatars, uploadImage, centerItem} = useSelector(state => state['avatar']);

    useEffect(() => {
        if (avatars.length === 0) dispatch(getAvatarsAndBgColorsThunk());
    }, [dispatch]);

    const renderItem = useCallback(({item, index, parallaxProps}) => {
        return (
            <AvatarCarouselRenderItem
                item={item}
                index={index}
                parallaxProps={parallaxProps}
                setIsPopup={setIsPopup}
                isEditProfile={isEditProfile}
                isPopup={isPopup}
            />
        );
    }, [uploadImage, isPopup]);

    if (avatars.length === 0) {
        return null;
    }

    return (
        <View style={[styles.container, {zIndex: isPopup ? 100000 : 10}]}>
            <Carousel
                ref={carouselRef}
                firstItem={centerItem}
                initialNumToRender={avatars.length}
                sliderWidth={SIZE.deviceWidth}
                itemWidth={SIZE.height.h150}
                data={avatars}
                renderItem={renderItem}
                inactiveSlideShift={SIZE.height.h26}
                inactiveSlideOpacity={isPopup ? .0 : .5}
                inactiveSlideScale={.85}
                enableMomentum={true}
                snapToInterval={SIZE.height.h150}
                decelerationRate={0.83}
                snapToAlignment={'center'}
                scrollEnabled={!isPopup}
            />
        </View>
    );
};

export default AvatarCarousel;

const styles = StyleSheet.create({
    container: {
        marginTop: SIZE.height.h26,
    }
});
