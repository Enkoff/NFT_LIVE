import * as yup from 'yup';

export const registrationValidationScheme =  yup.object().shape({
    name: yup.string().required('This field is required'),
    nikName: yup.string().required('This field is required'),
    email: yup.string().email('Please enter valid email').required('This field is required'),
    bio: yup.string().max(150, ({max}) => `Max ${max} char`).required('This field is required'),
});

export const createNftValidationScheme =  yup.object().shape({
    nftName: yup.string().required('This field is required'),
    price: yup.string().required('This field is required'),
    bio: yup.string().max(150, ({max}) => `Max ${max} char`).required('This field is required'),
});

export const addCollectionNameScheme = yup.object().shape({
    collectionName: yup.string().required('This field is required'),
});