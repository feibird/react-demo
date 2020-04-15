import axios from "axios";

const api = "http://localhost:1124";
export function http(url, params = {}, method = "get") {
  return axios({
    method: method,
    url: api + url,
    data: params,
  });
}
