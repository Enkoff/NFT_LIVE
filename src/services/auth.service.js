import {auth} from '../config/firebase/firebase.config';

const myAccount = {
    email: 'oleh@gmail.com',
    password: '222222'
};

const test1Account = {
    email: '1telegram@gmail.com',
    password: '111111'
};

export const authService = {
    getUid: (pinCode) => auth()
        .signInWithEmailAndPassword(
            pinCode === myAccount.password ? myAccount.email : test1Account.email,
            pinCode === myAccount.password ? myAccount.password : test1Account.password,
        )
        .then(response => response.user.uid)
};
