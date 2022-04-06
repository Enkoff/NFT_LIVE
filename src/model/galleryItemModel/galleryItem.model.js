import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export class GalleryItemModel {
    constructor(options) {
        this.id = uuidv4();
        this.sold = false;
        this.soldSum = 0;
        this.retweets = 0;
        this.likes = [];
        this.timeSell = '';
        this.isNftLiveTop = options.isNftLiveTop;
        this.authorId = options.authorId;
        this.nftImgUrl = options.nftImgUrl;
        this.nftFirebasePath = options.nftFirebasePath;
        this.collectionName = options.collectionName;
        this.nftName = options.nftName;
        this.nftBio = options.nftBio;
        this.ethPrice = options.ethPrice;
        this.createDate = options.createDate;
        this.publish = options.publish;
        this.selEnded = options.selEnded;
        this.authorAvatar = options.authorAvatar;
        this.authorNikName = options.authorNikName;
        this.authorBackground = options.authorBackground;
    }
}
