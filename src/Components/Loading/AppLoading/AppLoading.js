import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {AppLogoPng} from '../../../assets';
import {SIZE} from '../../../constants';

const AppLoading = (props) => {
    return <Image source={AppLogoPng} style={styles.appLogo}/>;
};

const styles = StyleSheet.create({
    appLogo: {
        width: SIZE.height.h238,
        height: SIZE.height.h81
    },
});

export default AppLoading;


