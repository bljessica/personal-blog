import request from './common/request';

const BASE_URL = '/blog';

function addBlog(data) {
    return request(BASE_URL + '/addBlog', 'POST', data);
}

function getBlogs(data) {
    return request(BASE_URL + '/getBlogs', 'POST', data);
}

function getAllBlogs() {
    return request(BASE_URL + '/getAllBlogs', 'GET');
}

export {
    addBlog,
    getBlogs,
    getAllBlogs
}