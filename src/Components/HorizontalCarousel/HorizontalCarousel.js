import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import HorizontalCarouselRenderItem from './HorizontalCarouselRenderItem';

const HorizontalCarousel = (
    {
        carouselData,
        filterGalleryHandler,
        initialTab,
        isCarouselError = false,
        setIsCarouselError = () => {}
    }
) => {
    const [selectedTab, setSelectedTab] = useState('');

    const itemHandler = (item) => {
        setSelectedTab(item);
        filterGalleryHandler(item['collectionName']);
        setIsCarouselError(false);
    };

    useEffect(() => {
        setSelectedTab(initialTab);
    }, [carouselData]);

    return (
        <View>
            <FlatList
                data={carouselData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <HorizontalCarouselRenderItem
                        key={item.id}
                        item={item}
                        index={index}
                        selectedTab={selectedTab}
                        itemHandler={itemHandler}
                        isCarouselError={isCarouselError}
                    />
                )}
            />
        </View>
    );
};
export default HorizontalCarousel;


