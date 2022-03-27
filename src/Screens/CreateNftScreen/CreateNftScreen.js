import React from 'react';
import {StyleSheet} from 'react-native';

import {
    BackgroundLeftGradient,
    BackgroundRightGradient,
    CreateNftForm
} from '../../Components/CreateNft';

import {KeyboardASV} from '../../Components/Register';
import {CustomText} from '../../Components';
import {SIZE} from '../../constants';

const CreateNftScreen = (props) => {
    return (
        <>
            <BackgroundLeftGradient/>
            <BackgroundRightGradient/>
            <KeyboardASV>
                <CustomText textStyle={styles.title}>Create your nft</CustomText>
                <CreateNftForm />
            </KeyboardASV>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: SIZE.height.h19,
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36
    }
});

export default CreateNftScreen;


