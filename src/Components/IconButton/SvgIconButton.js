import React from 'react';
import {StyleSheet, View, ActivityIndicator, TouchableNativeFeedback} from 'react-native';
import {SIZE, THEME} from '../../constants';

const SvgIconBtn = ({wrapperStyle, onPress, children, isLoading = false, loadingColor = 'white'}) => {
    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={styles.childrenWrapper}>
                    {isLoading
                        ? <ActivityIndicator color={loadingColor} />
                        : children
                    }
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: SIZE.height.h35,
        height: SIZE.height.h35,
        overflow: 'hidden',
        backgroundColor: THEME.black50,
        borderRadius: SIZE.height.h35 / 2
    },
    childrenWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SvgIconBtn;


