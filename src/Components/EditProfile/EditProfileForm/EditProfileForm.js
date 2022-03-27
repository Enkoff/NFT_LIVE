import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';

import {SIZE} from '../../../constants';
import {CustomButton, CustomTextInput} from '../../index';
import {
    updateAllGalleryItemThunk,
    updateNftLiveTopItemByAuthorIdThunk,
    updateUserInfoThunk
} from '../../../Redux/slices';
import {registrationValidationScheme} from '../../../config';
import {editProfileFormValidation} from '../../../config/validation';

const EditProfileForm = () => {
    const dispatch = useDispatch();
    const [isSave, setIsSave] = useState(false);
    const {user: {id, name, nikName, email, bio}} = useSelector(state => state['user']);
    const [isDisabledSubmitBtn, setIsDisabledSubmitBtn] = useState(true);

    const submit = async (values) => {
        setIsSave(true);
        await dispatch(updateUserInfoThunk({
            uid: id,
            name: values.name,
            nikName: values.nikName,
            email: values.email,
            bio: values.bio
        }));

        if (nikName !== values.nikName) {
            await dispatch(updateAllGalleryItemThunk({uid: id, fields: {authorNikName: values.nikName}}));
            await dispatch(updateNftLiveTopItemByAuthorIdThunk({authorId: id, fields: {authorNikName: values.nikName}}));
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


