import axios from "axios";

const api = "https://www.fastmock.site/mock/43500c531963a5a5fda54cdac12c982e/xianju";
export function http(url, method = "get", params = {}) {
  return axios({
    method: method,
    url: api + url,
    data: params
  });
}
