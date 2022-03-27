import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SIZE, THEME} from '../../../constants';
import {MainTopContent} from '../index';
import RootModalInput from '../RootModalInput/RootModalInput';
import LikeAndRetweets from '../LikeAndRetweets/LikeAndRetweets';
import MainFooterContent from '../MainFooterContent/MainFooterContent';
import Time from '../Time/Time';

const MainContent = ({item, isEditMode, inputs, changeInput, onBlurInput,setIsModal}) => {
    return (
        <View style={styles.contentContainer}>
            <MainTopContent
                changeInput={changeInput}
                inputs={inputs}
                item={item}
                isEditMode={isEditMode}
                onBlurInput={onBlurInput}
                setIsModal={setIsModal}
            />
            <RootModalInput
                initialValue={inputs.nftBio}
                value={inputs.nftBio}
                inputName={'nftBio'}
                onChange={changeInput}
                editable={isEditMode}
                onBlurInput={onBlurInput}
                isEditMode={isEditMode}
                isMultiline={true}
                style={[!isEditMode ? styles.nftBio : styles.nftBioEdit, {color: THEME.white60}]}
            />
            <LikeAndRetweets item={item}/>
            <Time isEditMode={isEditMode} item={item}/>
            <MainFooterContent
                isEditMode={isEditMode}
                inputs={inputs}
                changeInput={changeInput}
                onBlurInput={onBlurInput}
                item={item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: SIZE.width.w17,
    },
    nftBio: {
        borderWidth: 0,
    },
    nftBioEdit: {
        paddingHorizontal: SIZE.width.w10,
        paddingVertical: SIZE.height.h6,
        borderRadius: SIZE.height.h10,
    },
});

export default MainContent;


