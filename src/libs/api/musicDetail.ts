import request from "./axios/axios";
import { TOKEN } from "./export";

export default {
  getMusicInfor(id: any) {
    return request({
      url: `/song/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  writeMusicComment(id: number, contents: string) {
    return request({
      url: "/comment",
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        song_id: id,
        content: contents,
      },
    });
  },
  getMusicComment(id: number) {
    return request({
      url: `comment/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};
