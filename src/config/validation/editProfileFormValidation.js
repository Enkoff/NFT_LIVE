export const editProfileFormValidation = ({formikValues, initialFields, setIsDisabledSubmitBtn}) => {
    let isFieldsSame = true;
    let isEmptyField = false;
    let isBio150 = false;

    for (const fieldsKey in formikValues) {
        if (formikValues[fieldsKey] !== initialFields[fieldsKey]) {
            isFieldsSame = false;
        }
        if (formikValues[fieldsKey] === '') {
            isEmptyField = true;
        }
        if (formikValues.bio.length > 150) {
            isBio150 = true;
        }
    }

    if (isFieldsSame || isEmptyField || isBio150) {
        setIsDisabledSubmitBtn(true);
        return;
    }

    setIsDisabledSubmitBtn(false);
};