import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';

import {SIZE} from '../../../constants';
import {CustomButton, CustomTextInput} from '../../index';
import {
    updateGalleryItemByFields,
    updateNftByAuthorIdAndFieldsKeyThunk,
    updateUserByUidAndFieldsKeysThunk,
} from '../../../Redux/slices';
import {registrationValidationScheme} from '../../../config';
import {editProfileFormValidation} from '../../../config/validation';

const EditProfileForm = () => {
    const dispatch = useDispatch();
    const {user: {id, name, nikName, email, bio}} = useSelector(state => state['user']);

    const [isDisabledSubmitBtn, setIsDisabledSubmitBtn] = useState(true);
    const [isSave, setIsSave] = useState(false);

    const submit = async (values) => {
        setIsSave(true);

        const isNikNameUpdate = nikName !== values.nikName;

        await dispatch(updateUserByUidAndFieldsKeysThunk({uid: id, updateFields: values}));

        if (isNikNameUpdate) {
            const galleryItemUpdateField = {authorNikName: values.nikName};
            await dispatch(updateNftByAuthorIdAndFieldsKeyThunk({uid: id, updateFields: galleryItemUpdateField}));
            await dispatch(updateGalleryItemByFields({updateFields: galleryItemUpdateField}));
        }

        setIsSave(false);
        Keyboard.dismiss();
        setIsDisabledSubmitBtn(false);
    };

    const validate = (formikValues) => {
        const initialFields = {name, nikName, email, bio};
        editProfileFormValidation({
            formikValues,
            initialFields,
            setIsDisabledSubmitBtn
        });
    };

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{name, nikName, email, bio}}
                onSubmit={values => submit(values)}
                validationSchema={registrationValidationScheme}
                validate={validate}
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
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder={'Your name'}
                                headerText={'Name'}
                                touched={touched}
                                errors={errors}
                                inputName={'name'}
                            />
                            <CustomTextInput
                                onChangeText={handleChange('nikName')}
                                onBlur={handleBlur('nikName')}
                                value={values.nikName}
                                placeholder={'@nickname'}
                                headerText={'Create a nickname'}
                                touched={touched}
                                errors={errors}
                                inputName={'nikName'}
                            />
                            <CustomTextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder={'Your e-mail'}
                                headerText={'E-mail'}
                                touched={touched}
                                errors={errors}
                                inputName={'email'}
                            />
                            <CustomTextInput
                                onChangeText={handleChange('bio')}
                                onBlur={handleBlur('bio')}
                                value={values.bio}
                                placeholder={'Your bio'}
                                headerText={'Bio'}
                                inputStyle={styles.bioStyle}
                                multiline={true}
                                touched={touched}
                                errors={errors}
                                inputName={'bio'}
                            />
                            <CustomButton
                                onPress={handleSubmit}
                                name={'Save'}
                                wrapperStyle={styles.saveBtn}
                                isLoading={isSave}
                                disabled={isDisabledSubmitBtn}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: SIZE.height.h21,
        zIndex: 1
    },
    inputWrapper: {
        paddingHorizontal: SIZE.width.w15
    },
    bioStyle: {
        height: SIZE.height.h124
    },
    saveBtn: {
        marginTop: SIZE.height.h10,
        width: '100%',
        borderRadius: SIZE.borderRadius.br12
    }
});

export default EditProfileForm;


