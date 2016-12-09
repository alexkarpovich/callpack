import fetch from 'isomorphic-fetch'
import queryString from 'query-string'
import config from '../config';

function getHeaders(isUpload) {
    let token = localStorage.getItem('token'),
        headers = {};

    if (token && token !== 'undefined' ) {
        headers.Authorization = `JWT ${token}`;
    }

    if (!isUpload) {
        headers['Content-Type'] = 'application/json';
    }

    return headers
}

function getQueryPath(url, query) {
    let u = url ? url : '';
    let q = query ? query : null;

    return u + (q ? '?' + queryString.stringify(query) : '')
}

function buildRequestBody(requestData) {
    let { url, method, query, data, isUpload } = requestData,
        requestObject = {};

    url = getQueryPath(url, query);
    requestObject.method = method ? method : 'get';
    requestObject.headers = getHeaders(isUpload);

    // Convert the object parameters into a string
    if (data && typeof data === 'object' && !isUpload) {
        requestObject.body = JSON.stringify(data);
    } else if (isUpload) {
        requestObject.body = data;
    }

    return { url, requestData: {...requestObject} }
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else if (response.status == 403) {
        return response.json().then(data => {
            return Promise.reject(data)
        })
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

export default request => {
    const { url, requestData } = buildRequestBody(request);

    return fetch(config.api + url, requestData)
        .then(checkResponseStatus)
        .then(res => res.status != 204 ? res.json() : {})

}
