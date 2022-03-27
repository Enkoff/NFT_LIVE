import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CustomButton} from '../../index';
import {SIZE} from '../../../constants';

const PhotoEditorBottomButton = ({formData}) => {
    const navigation = useNavigation();


    const continueHandler = () => {
        navigation.navigate('PublishScreen', {formData});
    };

    return (
        <View style={styles.wrapper}>
            <CustomButton
                onPress={continueHandler}
                name={'Continue'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: SIZE.height.h32,
        width: '100%',
        alignItems: 'center',
    },
});

export default PhotoEditorBottomButton;


