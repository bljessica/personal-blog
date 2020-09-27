import request from './common/request';

const BASE_URL = '/note';

function addNote(data) {
    return request(BASE_URL + '/addNote', 'POST', data);
}

function getNotes(data) {
    return request(BASE_URL + '/getNotes', 'POST', data);
}

export {
    addNote,
    getNotes
}