import AsyncStorage from '@react-native-async-storage/async-storage';

export const firstEntry = async () => Boolean(await AsyncStorage.getItem('firstEnter'));
export const setFirstEntry = async () => {
    const isEntry = await AsyncStorage.getItem('firstEnter');
    !isEntry && await AsyncStorage.setItem('firstEnter', 'true');
};
