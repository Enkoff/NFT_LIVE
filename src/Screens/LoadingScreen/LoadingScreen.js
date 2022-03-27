import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Bitcoin1Png, Bitcoin2Png} from '../../assets';
import {AppLoading, CircleOne, CircleThree, CircleTwo, MetamaskConnection} from '../../Components/Loading';
import {CenterLinerGradient} from '../../Components';
import {SIZE, THEME} from '../../constants';

const LoadingScreen = ({isConnection = false, isIcons = true, children}) => {
    return (
        <View style={styles.screen}>
            <CenterLinerGradient/>
            <CircleOne>
                <CircleTwo>
                    <CircleThree>
                        {isConnection && isIcons && <MetamaskConnection/>}
                        {!isConnection && isIcons && <AppLoading/>}
                        {children}
                    </CircleThree>
                </CircleTwo>
            </CircleOne>
            {
                isConnection &&
                <>
                    <Image source={Bitcoin1Png} style={styles.btc1}/>
                    <Image source={Bitcoin2Png} style={styles.btc2}/>
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: THEME.backgroundColor,
            paddingTop: SIZE.statusBarHeight,
        },
        btc1: {
            position: 'absolute',
            width: SIZE.height.h50,
            height: SIZE.height.h56,
            top: SIZE.height.h210,
            right: 0
        },
        btc2: {
            position: 'absolute',
            width: SIZE.height.h73,
            height: SIZE.height.h73,
            top: SIZE.height.h270,
            left: 0
        },
    },
);

export default LoadingScreen;


