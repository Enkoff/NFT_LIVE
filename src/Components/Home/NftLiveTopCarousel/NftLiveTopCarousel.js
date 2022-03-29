import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {SIZE} from '../../../constants';
import CustomText from '../../CustomText/CustomText';
import {NftLiveTopCarouselRenderItem} from '../index';
import CarouselFooterLoader from '../CarouselFooterLoader/CarouselFooterLoader';

const NftLiveTopCarousel = (
    {
        data,
        setCurrentModalItem,
        setIsModal,
        onEndReached,
        isNextDataLoading
    }
) => {
    return (
        <View style={styles.wrapper}>
            <CustomText textStyle={styles.title}>Top of the week</CustomText>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <NftLiveTopCarouselRenderItem
                        item={item}
                        setCurrentModalItem={setCurrentModalItem}
                        setIsModal={setIsModal}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                onEndReached={() => onEndReached(data[data.length - 1].ethPrice)}
                // ListFooterComponent={isNextDataLoading && <CarouselFooterLoader/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginTop: SIZE.height.h26,
    },
    title: {
        marginLeft: SIZE.width.w18,
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36,
        fontWeight: 'bold',
        marginBottom: SIZE.height.h16
    },
});

export default NftLiveTopCarousel;

