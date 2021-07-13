import request from './axios/axios'

export default {
    getMusicInfor(id : any){
        return request({
            url : `/api/song/${id}`,
            method : 'get',
            headers : {
                'Content-type' : 'application/json'
            }
        })
    }
}