import request from './axios/axios'

export default {
    getMyMusic(){
        return request({
            url : '/api/song',
            method:'get',
            headers:{
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjUxMjMxMjMxMn0.d5_ym4ogK1nj2sNmBJU447QFQ_1mvW1eGZ4JGAg42sY`
            }
        })
    }
}