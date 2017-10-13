/**
 * Created by ityf12 on 2017-7-20.
 */
//import {cookie} from 'react-cookie-banner';

//export const baseurl = window.location.origin + "/pms-web/outer"; //'http://10.71.21.159:8080'; 'http://172.16.32.234:8080/pms-web/outer';
export const baseurl ='http://47.95.205.236/kabu/'

function fetchPost(url,json,callback){
    fetch(url,
        {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: json
        })
        .then(response=> response.json())
        .then(data=> callback(data))
        .catch(e=>{console.log(e)});
}

function fetchGet(url,callback){
    fetch(url,
        {
            method: 'GET',
            headers:{'Content-Type': 'text/plain'}
        })
        .then(response=> response.json())
        .then(data=> callback(data))
        .catch(e=>{console.log(e)});
}