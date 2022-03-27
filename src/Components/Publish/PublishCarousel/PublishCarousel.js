import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Carousel from 'react-native-snap-carousel';
import {getPublishThunk} from '../../../Redux/slices';
import {SIZE} from '../../../constants';
import PublishCarouselRenderItem from '../PublishCarouselRenderItem/PublishCarouselRenderItem';

const PublishCarousel = ({carouselRef}) => {
    const dispatch = useDispatch();
    const {publish, centerItem} = useSelector(state => state['publish']);

    useEffect(() => {
        if (publish.length === 0) {
            dispatch(getPublishThunk());
        }
    }, [dispatch]);

    if (publish.length === 0) {
        return null;
    }

    return (
        <Carousel
            ref={carouselRef}
            firstItem={centerItem}
            sliderWidth={SIZE.deviceWidth}
            sliderHeight={SIZE.deviceWidth}
            itemWidth={SIZE.height.h150}
            data={publish}
            renderItem={PublishCarouselRenderItem}
            inactiveSlideOpacity={.5}
            inactiveSlideScale={.8}
            enableMomentum={true}
            snapToInterval={SIZE.height.h150}
            decelerationRate={0.83}
            snapToAlignment={'start'}
            slideStyle={styles.slide}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        marginBottom: -SIZE.height.h210,
    }
});

export default PublishCarousel;


