import request from './axios/axios'
import { TOKEN } from './export'

export default {
    getMyMusic(){
        return request({
            url : '/song',
            method:'get',
            headers:{
                "Authorization" : `Bearer ${TOKEN}`
            }
        })
    },
    getMyProfile(){
        return request({
            url : '/profile',
            method : 'get',
            headers :{
                "Content-type" : "application/json",
                "Authorization" : `Bearer ${TOKEN}`
            }
        })
    }
}