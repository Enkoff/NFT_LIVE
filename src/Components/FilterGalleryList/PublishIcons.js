import React from 'react';
import {StyleSheet, View} from 'react-native';

import PublishIcon from './PublishIcon';
import {SIZE} from '../../constants';

const PublishIcons = ({publishArray}) => {
    return (
        <View style={styles.wrapper}>
            {publishArray.map(item => <PublishIcon key={item.id} img={item['imgUrl']}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: SIZE.height.h6,
        left: SIZE.width.w5,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 100,
    }
});


export default PublishIcons;


