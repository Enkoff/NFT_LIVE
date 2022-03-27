import {v4 as uuidv4} from 'uuid';

export class pushModel {
    constructor(options) {
        this.id = uuidv4();
        this.isShow = false;
        this.date = Date.now();
        this.imgUrl = options.imgUrl;
        this.imgBg = options.imgBg;
        this.title = options.title;
        this.subTitle = options.subTitle;
    }
}