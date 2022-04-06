import {SubscriptionsAndSubscribersModel} from '../../model/subscriptionsAndSubscribersModel/subscriptionsAndSubscribersModel';

export const createSubscriptionsObjects = (user, followUser) => {
    const {id, avatarUrl, avatarBackground, nikName} = user;
    const {followUserId, followUserAvatarUrl, followUserAvatarBackground, followUserNikName} = followUser;

    const userChatId = `${id}${followUserId}`;
    const followUserChatId = `${followUserId}${id}`;

    const userObj = new SubscriptionsAndSubscribersModel({
        id: id,
        avatarUrl: avatarUrl,
        avatarBackground: avatarBackground,
        nikName: nikName,
        chatId: userChatId
    });

    const followUserObj = new SubscriptionsAndSubscribersModel({
        id: followUserId,
        avatarUrl: followUserAvatarUrl,
        avatarBackground: followUserAvatarBackground,
        nikName: followUserNikName,
        chatId: followUserChatId
    });

    return {userObj, followUserObj};
};
