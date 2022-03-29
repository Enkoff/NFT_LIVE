import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {SIZE} from '../../../constants';
import {registrationValidationScheme} from '../../../config';
import ContinueBtn from '../ContinueBtn/ContinueBtn';
import {CustomTextInput} from '../../index';

const RegistrationFrom = () => {
    const submit = (values) => {
        console.log('ВІДПРАВКА ДАННИХ НА БЕК', values);
    };

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{name: '', nikName: '', email: '', bio: ''}}
                validateOnMount={true}
                onSubmit={values => submit(values)}
                validationSchema={registrationValidationScheme}
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
                            <ContinueBtn
                                onPress={handleSubmit}
                                name={'Continue'}
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
    }
});

export default RegistrationFrom;


