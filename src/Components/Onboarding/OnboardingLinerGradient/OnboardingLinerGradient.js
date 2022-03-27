import React from 'react';
import {StyleSheet} from 'react-native';

import {OnboardingLineGradientSvg} from '../../../assets';
import {SIZE} from '../../../constants';

const OnboardingLinerGradient = (props) => {
    return <OnboardingLineGradientSvg width={'100%'} height={SIZE.height.h538} style={styles.linearGradient}/>;
};

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        top: SIZE.deviceHeight < 718 ? -100 : -50
    },
});

export default OnboardingLinerGradient;


