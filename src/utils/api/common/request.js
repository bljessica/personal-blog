import axios from 'axios'
const BASE_URL = 'http://localhost:3000';

export default function request(url, method, data={}) {
    return new Promise((resolve, reject) => {
        let promise;
        url = BASE_URL + url;
        //GET请求
        if(method == 'GET') {
            //拼装GET请求
            let queryString = '';
            Object.keys(data).forEach(key => {
                queryString += key + '=' + data[key] + '&';
            })
            //有查询字符串
            if(queryString.length != 0) {
                url += '?' + queryString.substring(0, queryString.length - 1);
            }
            promise = axios.get(url);
        }
        //POST请求
        else if(method == 'POST') {
            promise = axios.post(url, data);
        }
        else {
            console.log('暂不支持该请求类型');
            return;
        }
        promise.then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    })
}