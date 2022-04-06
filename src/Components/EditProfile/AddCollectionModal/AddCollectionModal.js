import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';

import {SIZE, THEME} from '../../../constants';
import {addAndDeleteCollectionNameByUidThunk} from '../../../Redux/slices';
import {addCollectionNameScheme} from '../../../config';

import {collectionNameModel} from '../../../model';
import {CustomButton, CustomText, CustomTextInput} from '../../index';

const AddCollectionModal = ({setIsNewCollectionModal}) => {
    const dispatch = useDispatch();

    const [existError, setExistError] = useState(null);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isEditable, setIsEditable] = useState(true);

    const {user: {id, collectionsNames}} = useSelector(state => state['user']);

    const closeBtnHandler = () => {
        setIsNewCollectionModal(false);
    };

    const submit = async ({collectionName}) => {
        setIsConfirm(true);
        const isNameExist = collectionsNames.some(item => item.collectionName === collectionName);

        if (isNameExist) {
            setExistError('This name is already exist');
            setIsEditable(false);
            setTimeout(() => {
                setExistError(null);
                setIsEditable(true);
            }, 2000);
            return;
        }

        const newCollectionObj = new collectionNameModel({collectionName});
        await dispatch(addAndDeleteCollectionNameByUidThunk({uid: id, collectionObj: newCollectionObj}));

        setIsConfirm(false);
        setIsNewCollectionModal(false);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <CustomText textStyle={styles.title}>Create collection</CustomText>
                <Formik
                    initialValues={{collectionName: ''}}
                    validateOnMount={true}
                    onSubmit={values => submit(values)}
                    validationSchema={addCollectionNameScheme}
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
                                    onChangeText={handleChange('collectionName')}
                                    onBlur={handleBlur('collectionName')}
                                    value={values.collectionName}
                                    placeholder={'Collection name'}
                                    touched={touched}
                                    errors={errors}
                                    editable={isEditable}
                                    inputName={'collectionName'}
                                />
                                <CustomText textStyle={styles.error}>{existError}</CustomText>
                                <View style={styles.btnWrapper}>
                                    <CustomButton
                                        isLoading={isConfirm}
                                        onPress={handleSubmit}
                                        name={'Confirm'}
                                    />
                                    <CustomButton
                                        onPress={closeBtnHandler}
                                        name={'Close'}
                                        textWrapperStyle={styles.closeBtn}
                                    />
                                </View>
                            </View>
                        )
                    }
                </Formik>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.backgroundColor
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: SIZE.fontSize.fs20,
        lineHeight: SIZE.lineHeight.lh22
    },
    btnWrapper: {
        marginTop: SIZE.height.h10,
        width: SIZE.deviceWidth - (SIZE.width.w15 * 2),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    closeBtn: {
        backgroundColor: THEME.red
    },
    error: {
        position: 'absolute',
        fontSize: SIZE.fontSize.fs10,
        right: SIZE.width.w8,
        bottom: SIZE.height.h53,
        color: THEME.red
    }
});

export default AddCollectionModal;


