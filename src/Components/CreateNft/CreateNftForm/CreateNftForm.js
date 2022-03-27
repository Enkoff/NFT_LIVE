import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';

import {
    CustomTextInput,
    HorizontalCarousel, RootModal
} from '../../index';
import {SIZE} from '../../../constants';
import UploadImage from '../UploadImage/UploadImage';

import {createNftValidationScheme} from '../../../config';
import ContinueBtn from '../../Register/ContinueBtn/ContinueBtn';

const CreateNftForm = ({}) => {
    const navigation = useNavigation();

    const [uploadImage, setUploadImage] = useState(null);
    const [isUploadError, setIsUploadError] = useState(false);
    const [carouselData, setCarouselData] = useState([]);
    const [isCarouselError, setIsCarouselError] = useState(false);
    const [collectionName, setCollectionName] = useState('');

    const {user: {collectionsNames}} = useSelector(state => state['user']);

    useEffect(() => {
        setCarouselData(collectionsNames.filter(item => item.id !== 'all'));
        setUploadImage(null);
    }, [collectionsNames]);

    const pressBtnHandler = () => {
        if (!uploadImage) {
            setIsUploadError(true);
        }
        if (!collectionName) {
            setIsCarouselError(true);
        }
    };

    const submit = (value) => {
        if (isUploadError || isCarouselError) {
            return;
        }

        const formData = {...value, uploadImage, collectionName}

        navigation.navigate('PhotoEditorScreen', {formData});
    };

    return (
        <>
            <View style={styles.uploadImgWrapper}>
                <UploadImage
                    uploadImage={uploadImage}
                    setUploadImage={setUploadImage}
                    isUploadError={isUploadError}
                    setIsUploadError={setIsUploadError}
                />
            </View>
            <Formik
                initialValues={{nftName: '', bio: '', price: ''}}
                validateOnMount={true}
                onSubmit={values => submit(values)}
                validationSchema={createNftValidationScheme}
            >
                {
                    ({
                         handleChange,
                         handleBlur,
                         handleSubmit,
                         values,
                         touched,
                         errors
                     }) => (
                        <View style={styles.inputWrapper}>
                            <CustomTextInput
                                onChangeText={handleChange('nftName')}
                                onBlur={handleBlur('nftName')}
                                value={values.nftName}
                                placeholder={'NFT name'}
                                headerText={'Name of NFT'}
                                touched={touched}
                                errors={errors}
                                inputName={'nftName'}
                            />
                            <CustomTextInput
                                onChangeText={handleChange('bio')}
                                onBlur={handleBlur('bio')}
                                value={values.bio}
                                placeholder={'NFT bio'}
                                multiline={true}
                                inputStyle={styles.bioStyle}
                                headerText={'Bio'}
                                touched={touched}
                                errors={errors}
                                inputName={'bio'}
                            />
                            <CustomTextInput
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values.price}
                                placeholder={'ETH price'}
                                headerText={'Price in ETH'}
                                touched={touched}
                                errors={errors}
                                inputName={'price'}
                                keyboardType={'numeric'}
                            />
                            <HorizontalCarousel
                                carouselData={carouselData}
                                filterGalleryHandler={setCollectionName}
                                isCarouselError={isCarouselError}
                                setIsCarouselError={setIsCarouselError}
                            />
                            <ContinueBtn
                                onPress={() => {
                                    pressBtnHandler();
                                    handleSubmit();
                                }}
                                name={'Continue'}
                                wrapperStyle={styles.continueBtn}
                            />
                        </View>
                    )
                }
            </Formik>
        </>
    );
};

const styles = StyleSheet.create({
    uploadImgWrapper: {
        alignItems: 'center',
    },
    btnWrapper: {
        marginTop: SIZE.height.h53,
        alignItems: 'center'
    },
    bioStyle: {
        height: SIZE.height.h124
    },
    inputWrapper: {
        paddingHorizontal: SIZE.width.w16
    },
    continueBtn: {
        marginTop: SIZE.height.h24
    }
});

export default CreateNftForm;


