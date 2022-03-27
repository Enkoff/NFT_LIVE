import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {NftImgAndButtons} from '../index';
import ModalCloseButton from '../../ModalCloseButton/ModalCloseButton';
import {SIZE, THEME} from '../../../constants';
import MainContent from '../MainContent/MainContent';

const NftModalContent = ({item, isProfile = false, setIsModal}) => {
    const {nftName, nftBio, ethPrice} = item;

    const [isEditMode, setIsEditMode] = useState(false);
    const [inputs, setInputs] = useState({nftName, nftBio, ethPrice});

    const changeInput = (value, inputName) => {
        setInputs({...inputs, [inputName]: value});
    };

    const onBlurInput = (initialValue, inputName) => {
        setInputs({...inputs, [inputName]: initialValue});
    };

    return (
        <>
            <ModalCloseButton setIsModal={setIsModal}/>
            <View style={styles.wrapper}>
                <NftImgAndButtons
                    isProfile={isProfile}
                    item={item}
                    setIsEditMode={setIsEditMode}
                    isEditMode={isEditMode}
                    inputs={inputs}
                    setIsModal={setIsModal}
                />
                <KeyboardAwareScrollView>
                    <MainContent
                        changeInput={changeInput}
                        inputs={inputs}
                        item={item}
                        isEditMode={isEditMode}
                        onBlurInput={onBlurInput}
                        setIsModal={setIsModal}
                    />
                </KeyboardAwareScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        height: '85%',
        backgroundColor: THEME.light,
        borderRadius: SIZE.borderRadius.br12,
        marginTop: SIZE.height.h24,
    }
});

export default NftModalContent;


