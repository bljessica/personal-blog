import request from './common/request';

const BASE_URL = '/comment';

function saveComment(data) {
    return request(BASE_URL + '/saveComment', 'POST', data);
}

function getComments() {
    return request(BASE_URL + '/getComments', 'GET');
}

export {
    saveComment,
    getComments
}