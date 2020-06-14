import { AsyncStorage, Alert } from 'react-native';

const KEY_DEFAULT = '@Schedule-default';

export const setDefaultDataLogin = async (email: string, password: string) => {
  try {
    await AsyncStorage.setItem(
      KEY_DEFAULT,
      JSON.stringify({
        email,
        password,
      })
    );
  } catch (error) {
    Alert.alert('Punc', 'Error saving default data. ' + error.message);
  }
};

export const getDefaultDataLogin = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY_DEFAULT);

    if (data) return JSON.parse(data);

    return null;
  } catch (error) {
    Alert.alert('Punc', 'Errorcapturing default data. ' + error.message);
    return null;
  }
};
