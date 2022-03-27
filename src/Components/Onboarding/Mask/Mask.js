import React from 'react';
import {StyleSheet} from 'react-native';

import {MetamaskSvg} from '../../../assets';
import {SIZE} from '../../../constants';

const Mask = () => {
    return (
        <MetamaskSvg
            style={styles.metamask}
            width={SIZE.deviceWidth / 2}
            height={SIZE.deviceHeight / 2}
        />
    );
};

const styles = StyleSheet.create({
    metamask: {
        position: 'absolute',
        bottom: '-5%',
        right: '-27%',
        zIndex: 10
    },
});

export default Mask;


