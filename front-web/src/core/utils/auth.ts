import jwtDecode from "jwt-decode";
import { Role } from "./types";

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userName: string;
    userId: number;
    refresh_token: string;
}

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();
    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();
    return sessionData.access_token && isTokenValid();
}  


