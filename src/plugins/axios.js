import axios from "axios";

const $axios = axios.create({
  baseURL: "https://reqres.in/api/",
});

$axios.interceptors.request.use(
  (config) => {
    // config.headers["Accept-Language"] = i18n.global.locale.value;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
