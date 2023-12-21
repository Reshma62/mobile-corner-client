import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
      console.log("response interceptor", response);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxiosSecure;
