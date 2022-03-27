import React, from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {SIZE} from '../../../constants';
import HorizontalFriend from '../HorizontalFriend/HorizontalFriend';

const HorizontalFriendsCarousel = ({subscriptions}) => {
    return (
        <View style={styles.carouselContainer}>
            <FlatList
                data={subscriptions}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <HorizontalFriend key={index} subUser={item} index={index}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        marginBottom: SIZE.height.h16,
        flex: 1,
    },
});

export default HorizontalFriendsCarousel;


