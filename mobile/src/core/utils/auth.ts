import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==';

export const setAsysncKeys = async (value: LoginResponse) => {
    try {
        await AsyncStorage.setItem('authData', JSON.stringify(value));
    } catch(e) {
        console.warn(e);
    }
}

export const getSessionData = async () => {
    const sessionData =  await AsyncStorage.getItem('authData') ?? '{}';
    const parseSessionData = JSON.parse(sessionData);
    return parseSessionData as LoginResponse;
}

export const doLogout = async () => {
    try {
        const token = await AsyncStorage.removeItem("authData");
    } catch (e) {
        console.warn(e);
    }
}

export const getAccessTokenDecoded = async () => {
    const sessionData = await getSessionData();
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
}

export const isTokenValid = async () => {
    const { exp } = await getAccessTokenDecoded();
    return Date.now() <= exp * 1000;
}

export const isAuthenticated = async () => {
    try {
        const token = await AsyncStorage.getItem("authData");
        return token ? true : false;
    } catch (e) {
        console.warn(e);
    }
}

