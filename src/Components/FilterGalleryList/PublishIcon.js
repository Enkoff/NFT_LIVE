import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {SIZE} from '../../constants';

const PublishIcon = ({img}) => {
    return <Image source={{uri: img}} style={styles.img}/>;
};

const styles = StyleSheet.create({
    img: {
        width: SIZE.height.h16,
        height: SIZE.height.h16,
        borderRadius: SIZE.height.h16 / 2,
        marginHorizontal: SIZE.width.w2,
    }
});

export default PublishIcon;


