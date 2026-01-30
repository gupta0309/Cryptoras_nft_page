import axios from './axios';
import { respChanges } from './responseModify';
import { env } from './envConfig';
const backendHost = env.apiHost

export const getMethod = async (data) => {
    try {

        let respData = await axios({
            'method': 'get',
            'url': backendHost + data.apiUrl,
            headers: {
                "content-type": "application/json",
                authorization: localStorage.getItem("user_token")
            },
        });
        return respChanges(respData.data);
    }
    catch (err) {
        return {
            status: 'error',
            message: err.response.data.message,
            error: err.response.data.errors
        }
    }
}

export const postMethod = async (data) => {
    try {
        var headers = {
            "content-type": "application/json",
            authorization: localStorage.getItem("user_token")
        }

        let respData = await axios({
            'method': 'post',
            'url': backendHost + data.apiUrl,
            data: data.payload ? data.payload : {},
            headers: headers

        });

        return respChanges(respData.data);
    }
    catch (err) {
        return {
            status: 'error',
            message: err.response.data.message,
            error: err.response.data.errors
        }
    }
}

export const fileUpload = async (data) => {
    try {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        let respData = await axios({
            'method': 'post',
            'url': data.apiUrl,
            data: data.payload ? data.payload : {},
            headers: config
        });
        return respChanges(respData.data);
    }
    catch (err) {
        return {
            status: 'error',
            message: err.response.data.message,
            error: err.response.data.errors
        }
    }
}

