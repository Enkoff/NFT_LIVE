import React, {useRef} from 'react';
import {StyleSheet, FlatList, Animated} from 'react-native';

import CarouselRenderItem from '../CarouselRenderItem/CarouselRenderItem';

const OnboardingCarousel = ({data, setCurrentIndex}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    const viewableItemChange = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    return (
        <FlatList
            style={styles.flatList}
            data={data}
            renderItem={({item}) => <CarouselRenderItem item={item}/>}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item => item.id)}
            bounces={false}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                useNativeDriver: false
            })}
            onViewableItemsChanged={viewableItemChange}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
        />
    );
};

const styles = StyleSheet.create({
    flatList: {
        zIndex: 2,
        position: 'absolute',
    },
});

export default OnboardingCarousel;


