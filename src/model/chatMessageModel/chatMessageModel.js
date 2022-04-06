import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export class MessageModel {
    constructor(option) {
        this.id = uuidv4();
        this.date = Date.now();
        this.userId = option.userId;
        this.message = option.message;
        this.isShow = false;
        this.isNewDate = option.isNewDate;
    }
}
