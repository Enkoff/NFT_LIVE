import 'react-native-get-random-values';
import {v4 as uuidv4} from "uuid";

export class collectionNameModel {
    constructor(options) {
        this.id = uuidv4();
        this.collectionName = options.collectionName
    }
}