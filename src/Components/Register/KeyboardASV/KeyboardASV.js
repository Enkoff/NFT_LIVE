import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {SIZE} from '../../../constants';

const KeyboardASV = ({children, extraScrollHeight = 100}) => {
    return (
        <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            scrollEnabled={true}
            extraScrollHeight={extraScrollHeight}
            keyboardShouldPersistTaps="handled"
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
        >
            <View style={styles.screen}>
                {children}
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        position: 'relative',
        paddingTop: SIZE.statusBarMarginTop,
    },
});

export default KeyboardASV;


