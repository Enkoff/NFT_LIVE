export const howMuchLikes = (array) => array.reduce((prev, next) => prev + next.likes.length, 0);