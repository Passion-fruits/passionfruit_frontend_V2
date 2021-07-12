import request from './axios/axios'
import { MusicObj } from './../interfaces/upload';
import { TOKEN } from './export';
 
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
                "Authorization" : `Bearer ${TOKEN}`
            },
            data : fd
        })
    }
}