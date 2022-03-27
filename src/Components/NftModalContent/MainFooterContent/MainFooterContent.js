import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import RootModalInput from '../RootModalInput/RootModalInput';
import Price from '../Price/Price';
import {SIZE} from '../../../constants';
import CustomButton from '../../CustomBotton/CustomButton';
import {firestore} from '../../../config/firebase/firebase.config';

const MainFooterContent = ({inputs, changeInput, isEditMode, onBlurInput, item}) => {
    const {sold, id, authorId} = item;

    //ПЕРЕПИСАТИ!!!!!
    const buyHandler = async () => {
        const userRef = await firestore().collection('users').doc(authorId);
        const nftLiveTop = await firestore().collection('nft_live_top').doc('nftLiveTop');

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const updateGallery = doc.data().gallery;
                updateGallery.map(item => {
                    if (item.id === id) {
                        item.sold = true;
                        return item;
                    }
                    return item;
                });
                transaction.update(userRef, {'gallery': updateGallery});
            });
        });

        await firestore().runTransaction(transaction => {
            return transaction.get(nftLiveTop).then(doc => {
                const updateGallery = doc.data().nftLiveTopArray;
                updateGallery.map(item => {
                    if (item.id === id) {
                        item.sold = true;
                        return item;
                    }
                    return item;
                });
                transaction.update(nftLiveTop, {'nftLiveTopArray': updateGallery});
            });
        });
    };

    return (
        <View style={styles.footerContent}>
            <View>
                <Price ethPrice={inputs.ethPrice}>
                    <RootModalInput
                        keyboardType={'numeric'}
                        initialValue={inputs.ethPrice}
                        value={inputs.ethPrice}
                        inputName={'ethPrice'}
                        onChange={changeInput}
                        editable={isEditMode}
                        onBlurInput={onBlurInput}
                        isEditMode={isEditMode}
                        isMultiline={true}
                        style={!isEditMode ? styles.ethPrice : styles.ethPriceEdit}
                    />
                </Price>
            </View>
            <CustomButton
                disabled={sold}
                onPress={buyHandler}
                name={sold ? 'SOLD' : 'Buy'}
                wrapperStyle={styles.byBtn}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ethPrice: {
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22,
        borderWidth: 0,
    },
    ethPriceEdit: {
        fontWeight: 'bold',
        paddingHorizontal: SIZE.width.w10,
        borderRadius: SIZE.borderRadius.br8,
    },
    byBtn: {
        width: SIZE.width.w135,
        height: SIZE.height.h45
    }
});

export default MainFooterContent;


