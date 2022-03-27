import * as React from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SIZE, THEME} from '../../../constants';

const CreateNftIcon = ({children}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('CreateNftStackNav')}>
                <View style={styles.childrenWrapper}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: SIZE.height.h60,
        height: SIZE.height.h60,
        backgroundColor: THEME.primary,
        borderRadius: SIZE.borderRadius.br30,
        bottom: SIZE.height.h30,
        overflow: 'hidden'
    },
    childrenWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateNftIcon;