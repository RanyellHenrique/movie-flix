import axios, { Method } from "axios";
import queryString from 'query-string';
import { getSessionData, TOKEN } from './auth';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

export type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL ?? 'https://ranyell-movieflix.herokuapp.com';


export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
}

export const makeLogin = (data: LoginData) => {
    const headers = {
        Authorization: TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const payload = queryString.stringify({ ...data, grant_type: 'password' });
    return  makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}

export const makePrivateRequest = async ({ method = 'GET', url, data, params }: RequestParams) => {
    const sessionData = await getSessionData();
    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    return makeRequest({method, url, data, params, headers});
}