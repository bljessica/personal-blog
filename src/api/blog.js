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

function getBlogsByLabel(data) {
    return request(BASE_URL + '/getBlogsByLabel', 'GET', data);
}

function getAllLabels() {
    return request(BASE_URL + '/getAllLabels', 'GET');
}

export {
    addBlog,
    getBlogs,
    getAllBlogs,
    getBlogsByLabel,
    getAllLabels
}