import axios from "axios";

export const KAKAO = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
  },
});
