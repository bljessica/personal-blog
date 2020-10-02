import request from './common/request';
const BASE_URL = '/collection'

function collect(data) {
    return request(BASE_URL + '/collect', 'POST', data);
}

function cancelCollection(data) {
    return request(BASE_URL + '/cancelCollection', 'POST', data);
}

function isCollected(data) {
    return request(BASE_URL + '/isCollected', 'POST', data);
}

export {
    collect,
    cancelCollection,
    isCollected
}
