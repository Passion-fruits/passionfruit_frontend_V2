import request from './axios/axios'
import { MusicObj } from './../interfaces/upload';
 
export default {
    uploadMusic(musicObj : MusicObj){
        var fd = new FormData();
        fd.append("song", musicObj.musicSrc);
        fd.append("song", musicObj.coverSrc);
        fd.append("title", musicObj.title);
        fd.append("description", musicObj.description);
        fd.append("genre", musicObj.genre);
        fd.append("mood", musicObj.feeling);
        fd.append("duration", musicObj.duration);
        return request({
            url : '/api/song',
            method:'post',
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjUxMjMxMjMxMn0.d5_ym4ogK1nj2sNmBJU447QFQ_1mvW1eGZ4JGAg42sY`
            },
            data : fd
        })
    }
}