import axios, { Method } from "axios";

interface AxiosProps {
    method: Method;
    url: string;
    headers: any;
    data: any;
    msg?: string;
};

const BASE_URL = "http://localhost:8000";
export const ACCESS_TOKEN = "ca_access_token";

export const requestWithoutAceesToken = ({
    method,
    url,
    headers,
    data,
    msg
}: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data,
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log(`${msg} 에러`, err);
        throw new Error(err);
    })
};

export const requestWithAceesToken = ({
    method,
    url,
    headers,
    data,
    msg
}: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data,
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log(`${msg} 에러`, err);
        throw new Error(err);
    })
} 