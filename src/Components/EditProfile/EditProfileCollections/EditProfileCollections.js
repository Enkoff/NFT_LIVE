import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
    ButtonTextIcon,
    CustomText
} from '../../index';
import {SIZE} from '../../../constants';
import {PlusInBorderSvg} from '../../SVG';

const EditProfileCollections = ({setIsNewCollectionModal}) => {
    const newCollectionHandler = () => {
        setIsNewCollectionModal(true);
    };

    return (
        <View style={styles.wrapper}>
            <CustomText textStyle={styles.title}>Collections</CustomText>
            <ButtonTextIcon onPress={newCollectionHandler} name={'New collection'} wrapperStyle={styles.newCollection}>
                <PlusInBorderSvg width={SIZE.height.h20} height={SIZE.height.h20}/>
            </ButtonTextIcon>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: SIZE.height.h21,
        paddingHorizontal: SIZE.width.w15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22,
        marginBottom: SIZE.height.h10
    },
    newCollection: {
        width: '100%',
        borderRadius: SIZE.borderRadius.br12
    }
});

export default EditProfileCollections;


