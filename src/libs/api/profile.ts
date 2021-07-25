import request from "./axios/axios";
import { TOKEN } from "./export";

export default {
  getMyMusic(page : number) {
    return request({
      url: `/song?page=${page}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },
  getMyProfile() {
    return request({
      url: "/profile",
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },
  getProfile(id: number | string) {
    return request({
      url: `/profile/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  checkMine(id) {
    return request({
      url: `/profile/check/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },
};
